import { Context, Effect, Exit, Layer, Runtime, Scope } from "effect"

export function RuntimeClass<Args extends Array<any>, RE, R>(
  layer: (...args: Args) => Layer.Layer<never, RE, R>,
) {
  return class {
    #scope = Effect.runSync(Scope.make())
    #runtime: Effect.Effect<never, RE, Runtime.Runtime<R>>

    constructor(...args: Args) {
      this.#runtime = Effect.runSync(
        Effect.cached(
          Layer.toRuntime(layer(...args)).pipe(Scope.extend(this.#scope)),
        ),
      )
    }

    close(): Promise<void> {
      return Effect.runPromise(Scope.close(this.#scope, Exit.unit))
    }

    [Symbol.asyncDispose]() {
      return this.close()
    }

    [Symbol.dispose]() {
      this.close()
    }

    $effect<E, A>(effect: Effect.Effect<R, E, A>): Promise<A> {
      return Effect.runPromise(
        Effect.flatMap(this.#runtime, runtime =>
          Effect.provide(effect, runtime),
        ),
      )
    }

    $effectFn<F extends (...args: Array<any>) => Effect.Effect<R, any, any>>(
      fn: F,
    ): (
      ...args: Parameters<F>
    ) => Promise<Effect.Effect.Success<ReturnType<F>>> {
      return (...args) => this.$effect(fn(...args))
    }

    $service<I extends R, S, A>(
      tag: Context.Tag<I, S>,
      fn: (service: S) => Effect.Effect<R, unknown, A>,
    ): () => Promise<A> {
      return () => this.$effect(Effect.flatMap(tag, _ => fn(_)))
    }

    $serviceFn<
      I extends R,
      S,
      F extends (...args: Array<any>) => Effect.Effect<R, any, any>,
    >(
      tag: Context.Tag<I, S>,
      fn: (service: S) => F,
    ): (
      ...args: Parameters<F>
    ) => Promise<Effect.Effect.Success<ReturnType<F>>> {
      return (...args) => this.$effect(Effect.flatMap(tag, _ => fn(_)(args)))
    }
  }
}
