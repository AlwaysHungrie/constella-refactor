
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AgentWallet
 * 
 */
export type AgentWallet = $Result.DefaultSelection<Prisma.$AgentWalletPayload>
/**
 * Model AgentFunction
 * 
 */
export type AgentFunction = $Result.DefaultSelection<Prisma.$AgentFunctionPayload>
/**
 * Model Attestations
 * 
 */
export type Attestations = $Result.DefaultSelection<Prisma.$AttestationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentWallet`: Exposes CRUD operations for the **AgentWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentWallets
    * const agentWallets = await prisma.agentWallet.findMany()
    * ```
    */
  get agentWallet(): Prisma.AgentWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentFunction`: Exposes CRUD operations for the **AgentFunction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentFunctions
    * const agentFunctions = await prisma.agentFunction.findMany()
    * ```
    */
  get agentFunction(): Prisma.AgentFunctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attestations`: Exposes CRUD operations for the **Attestations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attestations
    * const attestations = await prisma.attestations.findMany()
    * ```
    */
  get attestations(): Prisma.AttestationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AgentWallet: 'AgentWallet',
    AgentFunction: 'AgentFunction',
    Attestations: 'Attestations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "agentWallet" | "agentFunction" | "attestations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AgentWallet: {
        payload: Prisma.$AgentWalletPayload<ExtArgs>
        fields: Prisma.AgentWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>
          }
          findFirst: {
            args: Prisma.AgentWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>
          }
          findMany: {
            args: Prisma.AgentWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>[]
          }
          create: {
            args: Prisma.AgentWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>
          }
          createMany: {
            args: Prisma.AgentWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>[]
          }
          delete: {
            args: Prisma.AgentWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>
          }
          update: {
            args: Prisma.AgentWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>
          }
          deleteMany: {
            args: Prisma.AgentWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>[]
          }
          upsert: {
            args: Prisma.AgentWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentWalletPayload>
          }
          aggregate: {
            args: Prisma.AgentWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentWallet>
          }
          groupBy: {
            args: Prisma.AgentWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentWalletCountArgs<ExtArgs>
            result: $Utils.Optional<AgentWalletCountAggregateOutputType> | number
          }
        }
      }
      AgentFunction: {
        payload: Prisma.$AgentFunctionPayload<ExtArgs>
        fields: Prisma.AgentFunctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFunctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFunctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>
          }
          findFirst: {
            args: Prisma.AgentFunctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFunctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>
          }
          findMany: {
            args: Prisma.AgentFunctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>[]
          }
          create: {
            args: Prisma.AgentFunctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>
          }
          createMany: {
            args: Prisma.AgentFunctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentFunctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>[]
          }
          delete: {
            args: Prisma.AgentFunctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>
          }
          update: {
            args: Prisma.AgentFunctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>
          }
          deleteMany: {
            args: Prisma.AgentFunctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentFunctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentFunctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>[]
          }
          upsert: {
            args: Prisma.AgentFunctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentFunctionPayload>
          }
          aggregate: {
            args: Prisma.AgentFunctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentFunction>
          }
          groupBy: {
            args: Prisma.AgentFunctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentFunctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentFunctionCountArgs<ExtArgs>
            result: $Utils.Optional<AgentFunctionCountAggregateOutputType> | number
          }
        }
      }
      Attestations: {
        payload: Prisma.$AttestationsPayload<ExtArgs>
        fields: Prisma.AttestationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttestationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttestationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>
          }
          findFirst: {
            args: Prisma.AttestationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttestationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>
          }
          findMany: {
            args: Prisma.AttestationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>[]
          }
          create: {
            args: Prisma.AttestationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>
          }
          createMany: {
            args: Prisma.AttestationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttestationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>[]
          }
          delete: {
            args: Prisma.AttestationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>
          }
          update: {
            args: Prisma.AttestationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>
          }
          deleteMany: {
            args: Prisma.AttestationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttestationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttestationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>[]
          }
          upsert: {
            args: Prisma.AttestationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationsPayload>
          }
          aggregate: {
            args: Prisma.AttestationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttestations>
          }
          groupBy: {
            args: Prisma.AttestationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttestationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttestationsCountArgs<ExtArgs>
            result: $Utils.Optional<AttestationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    agentWallet?: AgentWalletOmit
    agentFunction?: AgentFunctionOmit
    attestations?: AttestationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    agentWallets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentWallets?: boolean | UserCountOutputTypeCountAgentWalletsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgentWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWalletWhereInput
  }


  /**
   * Count Type AgentWalletCountOutputType
   */

  export type AgentWalletCountOutputType = {
    agentFunctions: number
  }

  export type AgentWalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentFunctions?: boolean | AgentWalletCountOutputTypeCountAgentFunctionsArgs
  }

  // Custom InputTypes
  /**
   * AgentWalletCountOutputType without action
   */
  export type AgentWalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWalletCountOutputType
     */
    select?: AgentWalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentWalletCountOutputType without action
   */
  export type AgentWalletCountOutputTypeCountAgentFunctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentFunctionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userAddress: string | null
    userId: string | null
    privyUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userAddress: string | null
    userId: string | null
    privyUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userAddress: number
    userId: number
    privyUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userAddress?: true
    userId?: true
    privyUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userAddress?: true
    userId?: true
    privyUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userAddress?: true
    userId?: true
    privyUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userAddress: string
    userId: string
    privyUserId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userAddress?: boolean
    userId?: boolean
    privyUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentWallets?: boolean | User$agentWalletsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userAddress?: boolean
    userId?: boolean
    privyUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userAddress?: boolean
    userId?: boolean
    privyUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userAddress?: boolean
    userId?: boolean
    privyUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userAddress" | "userId" | "privyUserId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentWallets?: boolean | User$agentWalletsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      agentWallets: Prisma.$AgentWalletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userAddress: string
      userId: string
      privyUserId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userAddress`
     * const userWithUserAddressOnly = await prisma.user.findMany({ select: { userAddress: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userAddress`
     * const userWithUserAddressOnly = await prisma.user.createManyAndReturn({
     *   select: { userAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userAddress`
     * const userWithUserAddressOnly = await prisma.user.updateManyAndReturn({
     *   select: { userAddress: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agentWallets<T extends User$agentWalletsArgs<ExtArgs> = {}>(args?: Subset<T, User$agentWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userAddress: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'String'>
    readonly privyUserId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.agentWallets
   */
  export type User$agentWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    where?: AgentWalletWhereInput
    orderBy?: AgentWalletOrderByWithRelationInput | AgentWalletOrderByWithRelationInput[]
    cursor?: AgentWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentWalletScalarFieldEnum | AgentWalletScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AgentWallet
   */

  export type AggregateAgentWallet = {
    _count: AgentWalletCountAggregateOutputType | null
    _avg: AgentWalletAvgAggregateOutputType | null
    _sum: AgentWalletSumAggregateOutputType | null
    _min: AgentWalletMinAggregateOutputType | null
    _max: AgentWalletMaxAggregateOutputType | null
  }

  export type AgentWalletAvgAggregateOutputType = {
    dbPort: number | null
  }

  export type AgentWalletSumAggregateOutputType = {
    dbPort: number | null
  }

  export type AgentWalletMinAggregateOutputType = {
    walletAddress: string | null
    privateKey: string | null
    ownerAddress: string | null
    domain: string | null
    systemPrompt: string | null
    dbName: string | null
    dbUser: string | null
    dbPassword: string | null
    dbHost: string | null
    dbPort: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentWalletMaxAggregateOutputType = {
    walletAddress: string | null
    privateKey: string | null
    ownerAddress: string | null
    domain: string | null
    systemPrompt: string | null
    dbName: string | null
    dbUser: string | null
    dbPassword: string | null
    dbHost: string | null
    dbPort: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentWalletCountAggregateOutputType = {
    walletAddress: number
    privateKey: number
    ownerAddress: number
    domain: number
    systemPrompt: number
    dbName: number
    dbUser: number
    dbPassword: number
    dbHost: number
    dbPort: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentWalletAvgAggregateInputType = {
    dbPort?: true
  }

  export type AgentWalletSumAggregateInputType = {
    dbPort?: true
  }

  export type AgentWalletMinAggregateInputType = {
    walletAddress?: true
    privateKey?: true
    ownerAddress?: true
    domain?: true
    systemPrompt?: true
    dbName?: true
    dbUser?: true
    dbPassword?: true
    dbHost?: true
    dbPort?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentWalletMaxAggregateInputType = {
    walletAddress?: true
    privateKey?: true
    ownerAddress?: true
    domain?: true
    systemPrompt?: true
    dbName?: true
    dbUser?: true
    dbPassword?: true
    dbHost?: true
    dbPort?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentWalletCountAggregateInputType = {
    walletAddress?: true
    privateKey?: true
    ownerAddress?: true
    domain?: true
    systemPrompt?: true
    dbName?: true
    dbUser?: true
    dbPassword?: true
    dbHost?: true
    dbPort?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentWallet to aggregate.
     */
    where?: AgentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentWallets to fetch.
     */
    orderBy?: AgentWalletOrderByWithRelationInput | AgentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentWallets
    **/
    _count?: true | AgentWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentWalletMaxAggregateInputType
  }

  export type GetAgentWalletAggregateType<T extends AgentWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentWallet[P]>
      : GetScalarType<T[P], AggregateAgentWallet[P]>
  }




  export type AgentWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWalletWhereInput
    orderBy?: AgentWalletOrderByWithAggregationInput | AgentWalletOrderByWithAggregationInput[]
    by: AgentWalletScalarFieldEnum[] | AgentWalletScalarFieldEnum
    having?: AgentWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentWalletCountAggregateInputType | true
    _avg?: AgentWalletAvgAggregateInputType
    _sum?: AgentWalletSumAggregateInputType
    _min?: AgentWalletMinAggregateInputType
    _max?: AgentWalletMaxAggregateInputType
  }

  export type AgentWalletGroupByOutputType = {
    walletAddress: string
    privateKey: string
    ownerAddress: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt: Date
    updatedAt: Date
    _count: AgentWalletCountAggregateOutputType | null
    _avg: AgentWalletAvgAggregateOutputType | null
    _sum: AgentWalletSumAggregateOutputType | null
    _min: AgentWalletMinAggregateOutputType | null
    _max: AgentWalletMaxAggregateOutputType | null
  }

  type GetAgentWalletGroupByPayload<T extends AgentWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentWalletGroupByOutputType[P]>
            : GetScalarType<T[P], AgentWalletGroupByOutputType[P]>
        }
      >
    >


  export type AgentWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletAddress?: boolean
    privateKey?: boolean
    ownerAddress?: boolean
    domain?: boolean
    systemPrompt?: boolean
    dbName?: boolean
    dbUser?: boolean
    dbPassword?: boolean
    dbHost?: boolean
    dbPort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    agentFunctions?: boolean | AgentWallet$agentFunctionsArgs<ExtArgs>
    _count?: boolean | AgentWalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentWallet"]>

  export type AgentWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletAddress?: boolean
    privateKey?: boolean
    ownerAddress?: boolean
    domain?: boolean
    systemPrompt?: boolean
    dbName?: boolean
    dbUser?: boolean
    dbPassword?: boolean
    dbHost?: boolean
    dbPort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentWallet"]>

  export type AgentWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    walletAddress?: boolean
    privateKey?: boolean
    ownerAddress?: boolean
    domain?: boolean
    systemPrompt?: boolean
    dbName?: boolean
    dbUser?: boolean
    dbPassword?: boolean
    dbHost?: boolean
    dbPort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentWallet"]>

  export type AgentWalletSelectScalar = {
    walletAddress?: boolean
    privateKey?: boolean
    ownerAddress?: boolean
    domain?: boolean
    systemPrompt?: boolean
    dbName?: boolean
    dbUser?: boolean
    dbPassword?: boolean
    dbHost?: boolean
    dbPort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"walletAddress" | "privateKey" | "ownerAddress" | "domain" | "systemPrompt" | "dbName" | "dbUser" | "dbPassword" | "dbHost" | "dbPort" | "createdAt" | "updatedAt", ExtArgs["result"]["agentWallet"]>
  export type AgentWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    agentFunctions?: boolean | AgentWallet$agentFunctionsArgs<ExtArgs>
    _count?: boolean | AgentWalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgentWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgentWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentWallet"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      agentFunctions: Prisma.$AgentFunctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      walletAddress: string
      privateKey: string
      ownerAddress: string
      domain: string
      systemPrompt: string
      dbName: string
      dbUser: string
      dbPassword: string
      dbHost: string
      dbPort: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agentWallet"]>
    composites: {}
  }

  type AgentWalletGetPayload<S extends boolean | null | undefined | AgentWalletDefaultArgs> = $Result.GetResult<Prisma.$AgentWalletPayload, S>

  type AgentWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentWalletCountAggregateInputType | true
    }

  export interface AgentWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentWallet'], meta: { name: 'AgentWallet' } }
    /**
     * Find zero or one AgentWallet that matches the filter.
     * @param {AgentWalletFindUniqueArgs} args - Arguments to find a AgentWallet
     * @example
     * // Get one AgentWallet
     * const agentWallet = await prisma.agentWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentWalletFindUniqueArgs>(args: SelectSubset<T, AgentWalletFindUniqueArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentWalletFindUniqueOrThrowArgs} args - Arguments to find a AgentWallet
     * @example
     * // Get one AgentWallet
     * const agentWallet = await prisma.agentWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletFindFirstArgs} args - Arguments to find a AgentWallet
     * @example
     * // Get one AgentWallet
     * const agentWallet = await prisma.agentWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentWalletFindFirstArgs>(args?: SelectSubset<T, AgentWalletFindFirstArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletFindFirstOrThrowArgs} args - Arguments to find a AgentWallet
     * @example
     * // Get one AgentWallet
     * const agentWallet = await prisma.agentWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentWallets
     * const agentWallets = await prisma.agentWallet.findMany()
     * 
     * // Get first 10 AgentWallets
     * const agentWallets = await prisma.agentWallet.findMany({ take: 10 })
     * 
     * // Only select the `walletAddress`
     * const agentWalletWithWalletAddressOnly = await prisma.agentWallet.findMany({ select: { walletAddress: true } })
     * 
     */
    findMany<T extends AgentWalletFindManyArgs>(args?: SelectSubset<T, AgentWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentWallet.
     * @param {AgentWalletCreateArgs} args - Arguments to create a AgentWallet.
     * @example
     * // Create one AgentWallet
     * const AgentWallet = await prisma.agentWallet.create({
     *   data: {
     *     // ... data to create a AgentWallet
     *   }
     * })
     * 
     */
    create<T extends AgentWalletCreateArgs>(args: SelectSubset<T, AgentWalletCreateArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentWallets.
     * @param {AgentWalletCreateManyArgs} args - Arguments to create many AgentWallets.
     * @example
     * // Create many AgentWallets
     * const agentWallet = await prisma.agentWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentWalletCreateManyArgs>(args?: SelectSubset<T, AgentWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentWallets and returns the data saved in the database.
     * @param {AgentWalletCreateManyAndReturnArgs} args - Arguments to create many AgentWallets.
     * @example
     * // Create many AgentWallets
     * const agentWallet = await prisma.agentWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentWallets and only return the `walletAddress`
     * const agentWalletWithWalletAddressOnly = await prisma.agentWallet.createManyAndReturn({
     *   select: { walletAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentWallet.
     * @param {AgentWalletDeleteArgs} args - Arguments to delete one AgentWallet.
     * @example
     * // Delete one AgentWallet
     * const AgentWallet = await prisma.agentWallet.delete({
     *   where: {
     *     // ... filter to delete one AgentWallet
     *   }
     * })
     * 
     */
    delete<T extends AgentWalletDeleteArgs>(args: SelectSubset<T, AgentWalletDeleteArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentWallet.
     * @param {AgentWalletUpdateArgs} args - Arguments to update one AgentWallet.
     * @example
     * // Update one AgentWallet
     * const agentWallet = await prisma.agentWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentWalletUpdateArgs>(args: SelectSubset<T, AgentWalletUpdateArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentWallets.
     * @param {AgentWalletDeleteManyArgs} args - Arguments to filter AgentWallets to delete.
     * @example
     * // Delete a few AgentWallets
     * const { count } = await prisma.agentWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentWalletDeleteManyArgs>(args?: SelectSubset<T, AgentWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentWallets
     * const agentWallet = await prisma.agentWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentWalletUpdateManyArgs>(args: SelectSubset<T, AgentWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentWallets and returns the data updated in the database.
     * @param {AgentWalletUpdateManyAndReturnArgs} args - Arguments to update many AgentWallets.
     * @example
     * // Update many AgentWallets
     * const agentWallet = await prisma.agentWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentWallets and only return the `walletAddress`
     * const agentWalletWithWalletAddressOnly = await prisma.agentWallet.updateManyAndReturn({
     *   select: { walletAddress: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentWallet.
     * @param {AgentWalletUpsertArgs} args - Arguments to update or create a AgentWallet.
     * @example
     * // Update or create a AgentWallet
     * const agentWallet = await prisma.agentWallet.upsert({
     *   create: {
     *     // ... data to create a AgentWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentWallet we want to update
     *   }
     * })
     */
    upsert<T extends AgentWalletUpsertArgs>(args: SelectSubset<T, AgentWalletUpsertArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletCountArgs} args - Arguments to filter AgentWallets to count.
     * @example
     * // Count the number of AgentWallets
     * const count = await prisma.agentWallet.count({
     *   where: {
     *     // ... the filter for the AgentWallets we want to count
     *   }
     * })
    **/
    count<T extends AgentWalletCountArgs>(
      args?: Subset<T, AgentWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentWalletAggregateArgs>(args: Subset<T, AgentWalletAggregateArgs>): Prisma.PrismaPromise<GetAgentWalletAggregateType<T>>

    /**
     * Group by AgentWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentWalletGroupByArgs['orderBy'] }
        : { orderBy?: AgentWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentWallet model
   */
  readonly fields: AgentWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agentFunctions<T extends AgentWallet$agentFunctionsArgs<ExtArgs> = {}>(args?: Subset<T, AgentWallet$agentFunctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentWallet model
   */
  interface AgentWalletFieldRefs {
    readonly walletAddress: FieldRef<"AgentWallet", 'String'>
    readonly privateKey: FieldRef<"AgentWallet", 'String'>
    readonly ownerAddress: FieldRef<"AgentWallet", 'String'>
    readonly domain: FieldRef<"AgentWallet", 'String'>
    readonly systemPrompt: FieldRef<"AgentWallet", 'String'>
    readonly dbName: FieldRef<"AgentWallet", 'String'>
    readonly dbUser: FieldRef<"AgentWallet", 'String'>
    readonly dbPassword: FieldRef<"AgentWallet", 'String'>
    readonly dbHost: FieldRef<"AgentWallet", 'String'>
    readonly dbPort: FieldRef<"AgentWallet", 'Int'>
    readonly createdAt: FieldRef<"AgentWallet", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentWallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentWallet findUnique
   */
  export type AgentWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * Filter, which AgentWallet to fetch.
     */
    where: AgentWalletWhereUniqueInput
  }

  /**
   * AgentWallet findUniqueOrThrow
   */
  export type AgentWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * Filter, which AgentWallet to fetch.
     */
    where: AgentWalletWhereUniqueInput
  }

  /**
   * AgentWallet findFirst
   */
  export type AgentWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * Filter, which AgentWallet to fetch.
     */
    where?: AgentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentWallets to fetch.
     */
    orderBy?: AgentWalletOrderByWithRelationInput | AgentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentWallets.
     */
    cursor?: AgentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentWallets.
     */
    distinct?: AgentWalletScalarFieldEnum | AgentWalletScalarFieldEnum[]
  }

  /**
   * AgentWallet findFirstOrThrow
   */
  export type AgentWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * Filter, which AgentWallet to fetch.
     */
    where?: AgentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentWallets to fetch.
     */
    orderBy?: AgentWalletOrderByWithRelationInput | AgentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentWallets.
     */
    cursor?: AgentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentWallets.
     */
    distinct?: AgentWalletScalarFieldEnum | AgentWalletScalarFieldEnum[]
  }

  /**
   * AgentWallet findMany
   */
  export type AgentWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * Filter, which AgentWallets to fetch.
     */
    where?: AgentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentWallets to fetch.
     */
    orderBy?: AgentWalletOrderByWithRelationInput | AgentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentWallets.
     */
    cursor?: AgentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentWallets.
     */
    skip?: number
    distinct?: AgentWalletScalarFieldEnum | AgentWalletScalarFieldEnum[]
  }

  /**
   * AgentWallet create
   */
  export type AgentWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentWallet.
     */
    data: XOR<AgentWalletCreateInput, AgentWalletUncheckedCreateInput>
  }

  /**
   * AgentWallet createMany
   */
  export type AgentWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentWallets.
     */
    data: AgentWalletCreateManyInput | AgentWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentWallet createManyAndReturn
   */
  export type AgentWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * The data used to create many AgentWallets.
     */
    data: AgentWalletCreateManyInput | AgentWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentWallet update
   */
  export type AgentWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentWallet.
     */
    data: XOR<AgentWalletUpdateInput, AgentWalletUncheckedUpdateInput>
    /**
     * Choose, which AgentWallet to update.
     */
    where: AgentWalletWhereUniqueInput
  }

  /**
   * AgentWallet updateMany
   */
  export type AgentWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentWallets.
     */
    data: XOR<AgentWalletUpdateManyMutationInput, AgentWalletUncheckedUpdateManyInput>
    /**
     * Filter which AgentWallets to update
     */
    where?: AgentWalletWhereInput
    /**
     * Limit how many AgentWallets to update.
     */
    limit?: number
  }

  /**
   * AgentWallet updateManyAndReturn
   */
  export type AgentWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * The data used to update AgentWallets.
     */
    data: XOR<AgentWalletUpdateManyMutationInput, AgentWalletUncheckedUpdateManyInput>
    /**
     * Filter which AgentWallets to update
     */
    where?: AgentWalletWhereInput
    /**
     * Limit how many AgentWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentWallet upsert
   */
  export type AgentWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentWallet to update in case it exists.
     */
    where: AgentWalletWhereUniqueInput
    /**
     * In case the AgentWallet found by the `where` argument doesn't exist, create a new AgentWallet with this data.
     */
    create: XOR<AgentWalletCreateInput, AgentWalletUncheckedCreateInput>
    /**
     * In case the AgentWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentWalletUpdateInput, AgentWalletUncheckedUpdateInput>
  }

  /**
   * AgentWallet delete
   */
  export type AgentWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
    /**
     * Filter which AgentWallet to delete.
     */
    where: AgentWalletWhereUniqueInput
  }

  /**
   * AgentWallet deleteMany
   */
  export type AgentWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentWallets to delete
     */
    where?: AgentWalletWhereInput
    /**
     * Limit how many AgentWallets to delete.
     */
    limit?: number
  }

  /**
   * AgentWallet.agentFunctions
   */
  export type AgentWallet$agentFunctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    where?: AgentFunctionWhereInput
    orderBy?: AgentFunctionOrderByWithRelationInput | AgentFunctionOrderByWithRelationInput[]
    cursor?: AgentFunctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentFunctionScalarFieldEnum | AgentFunctionScalarFieldEnum[]
  }

  /**
   * AgentWallet without action
   */
  export type AgentWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentWallet
     */
    select?: AgentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentWallet
     */
    omit?: AgentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentWalletInclude<ExtArgs> | null
  }


  /**
   * Model AgentFunction
   */

  export type AggregateAgentFunction = {
    _count: AgentFunctionCountAggregateOutputType | null
    _min: AgentFunctionMinAggregateOutputType | null
    _max: AgentFunctionMaxAggregateOutputType | null
  }

  export type AgentFunctionMinAggregateOutputType = {
    functionId: string | null
    functionName: string | null
    agentWalletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentFunctionMaxAggregateOutputType = {
    functionId: string | null
    functionName: string | null
    agentWalletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentFunctionCountAggregateOutputType = {
    functionId: number
    functionName: number
    agentWalletAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentFunctionMinAggregateInputType = {
    functionId?: true
    functionName?: true
    agentWalletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentFunctionMaxAggregateInputType = {
    functionId?: true
    functionName?: true
    agentWalletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentFunctionCountAggregateInputType = {
    functionId?: true
    functionName?: true
    agentWalletAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentFunctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentFunction to aggregate.
     */
    where?: AgentFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentFunctions to fetch.
     */
    orderBy?: AgentFunctionOrderByWithRelationInput | AgentFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentFunctions
    **/
    _count?: true | AgentFunctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentFunctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentFunctionMaxAggregateInputType
  }

  export type GetAgentFunctionAggregateType<T extends AgentFunctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentFunction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentFunction[P]>
      : GetScalarType<T[P], AggregateAgentFunction[P]>
  }




  export type AgentFunctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentFunctionWhereInput
    orderBy?: AgentFunctionOrderByWithAggregationInput | AgentFunctionOrderByWithAggregationInput[]
    by: AgentFunctionScalarFieldEnum[] | AgentFunctionScalarFieldEnum
    having?: AgentFunctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentFunctionCountAggregateInputType | true
    _min?: AgentFunctionMinAggregateInputType
    _max?: AgentFunctionMaxAggregateInputType
  }

  export type AgentFunctionGroupByOutputType = {
    functionId: string
    functionName: string
    agentWalletAddress: string
    createdAt: Date
    updatedAt: Date
    _count: AgentFunctionCountAggregateOutputType | null
    _min: AgentFunctionMinAggregateOutputType | null
    _max: AgentFunctionMaxAggregateOutputType | null
  }

  type GetAgentFunctionGroupByPayload<T extends AgentFunctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentFunctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentFunctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentFunctionGroupByOutputType[P]>
            : GetScalarType<T[P], AgentFunctionGroupByOutputType[P]>
        }
      >
    >


  export type AgentFunctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    functionId?: boolean
    functionName?: boolean
    agentWalletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentWallet?: boolean | AgentWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentFunction"]>

  export type AgentFunctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    functionId?: boolean
    functionName?: boolean
    agentWalletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentWallet?: boolean | AgentWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentFunction"]>

  export type AgentFunctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    functionId?: boolean
    functionName?: boolean
    agentWalletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agentWallet?: boolean | AgentWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentFunction"]>

  export type AgentFunctionSelectScalar = {
    functionId?: boolean
    functionName?: boolean
    agentWalletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentFunctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"functionId" | "functionName" | "agentWalletAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["agentFunction"]>
  export type AgentFunctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentWallet?: boolean | AgentWalletDefaultArgs<ExtArgs>
  }
  export type AgentFunctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentWallet?: boolean | AgentWalletDefaultArgs<ExtArgs>
  }
  export type AgentFunctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentWallet?: boolean | AgentWalletDefaultArgs<ExtArgs>
  }

  export type $AgentFunctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentFunction"
    objects: {
      agentWallet: Prisma.$AgentWalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      functionId: string
      functionName: string
      agentWalletAddress: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agentFunction"]>
    composites: {}
  }

  type AgentFunctionGetPayload<S extends boolean | null | undefined | AgentFunctionDefaultArgs> = $Result.GetResult<Prisma.$AgentFunctionPayload, S>

  type AgentFunctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFunctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentFunctionCountAggregateInputType | true
    }

  export interface AgentFunctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentFunction'], meta: { name: 'AgentFunction' } }
    /**
     * Find zero or one AgentFunction that matches the filter.
     * @param {AgentFunctionFindUniqueArgs} args - Arguments to find a AgentFunction
     * @example
     * // Get one AgentFunction
     * const agentFunction = await prisma.agentFunction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFunctionFindUniqueArgs>(args: SelectSubset<T, AgentFunctionFindUniqueArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentFunction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFunctionFindUniqueOrThrowArgs} args - Arguments to find a AgentFunction
     * @example
     * // Get one AgentFunction
     * const agentFunction = await prisma.agentFunction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFunctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFunctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentFunction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionFindFirstArgs} args - Arguments to find a AgentFunction
     * @example
     * // Get one AgentFunction
     * const agentFunction = await prisma.agentFunction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFunctionFindFirstArgs>(args?: SelectSubset<T, AgentFunctionFindFirstArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentFunction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionFindFirstOrThrowArgs} args - Arguments to find a AgentFunction
     * @example
     * // Get one AgentFunction
     * const agentFunction = await prisma.agentFunction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFunctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFunctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentFunctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentFunctions
     * const agentFunctions = await prisma.agentFunction.findMany()
     * 
     * // Get first 10 AgentFunctions
     * const agentFunctions = await prisma.agentFunction.findMany({ take: 10 })
     * 
     * // Only select the `functionId`
     * const agentFunctionWithFunctionIdOnly = await prisma.agentFunction.findMany({ select: { functionId: true } })
     * 
     */
    findMany<T extends AgentFunctionFindManyArgs>(args?: SelectSubset<T, AgentFunctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentFunction.
     * @param {AgentFunctionCreateArgs} args - Arguments to create a AgentFunction.
     * @example
     * // Create one AgentFunction
     * const AgentFunction = await prisma.agentFunction.create({
     *   data: {
     *     // ... data to create a AgentFunction
     *   }
     * })
     * 
     */
    create<T extends AgentFunctionCreateArgs>(args: SelectSubset<T, AgentFunctionCreateArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentFunctions.
     * @param {AgentFunctionCreateManyArgs} args - Arguments to create many AgentFunctions.
     * @example
     * // Create many AgentFunctions
     * const agentFunction = await prisma.agentFunction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentFunctionCreateManyArgs>(args?: SelectSubset<T, AgentFunctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentFunctions and returns the data saved in the database.
     * @param {AgentFunctionCreateManyAndReturnArgs} args - Arguments to create many AgentFunctions.
     * @example
     * // Create many AgentFunctions
     * const agentFunction = await prisma.agentFunction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentFunctions and only return the `functionId`
     * const agentFunctionWithFunctionIdOnly = await prisma.agentFunction.createManyAndReturn({
     *   select: { functionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentFunctionCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentFunctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentFunction.
     * @param {AgentFunctionDeleteArgs} args - Arguments to delete one AgentFunction.
     * @example
     * // Delete one AgentFunction
     * const AgentFunction = await prisma.agentFunction.delete({
     *   where: {
     *     // ... filter to delete one AgentFunction
     *   }
     * })
     * 
     */
    delete<T extends AgentFunctionDeleteArgs>(args: SelectSubset<T, AgentFunctionDeleteArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentFunction.
     * @param {AgentFunctionUpdateArgs} args - Arguments to update one AgentFunction.
     * @example
     * // Update one AgentFunction
     * const agentFunction = await prisma.agentFunction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentFunctionUpdateArgs>(args: SelectSubset<T, AgentFunctionUpdateArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentFunctions.
     * @param {AgentFunctionDeleteManyArgs} args - Arguments to filter AgentFunctions to delete.
     * @example
     * // Delete a few AgentFunctions
     * const { count } = await prisma.agentFunction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentFunctionDeleteManyArgs>(args?: SelectSubset<T, AgentFunctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentFunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentFunctions
     * const agentFunction = await prisma.agentFunction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentFunctionUpdateManyArgs>(args: SelectSubset<T, AgentFunctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentFunctions and returns the data updated in the database.
     * @param {AgentFunctionUpdateManyAndReturnArgs} args - Arguments to update many AgentFunctions.
     * @example
     * // Update many AgentFunctions
     * const agentFunction = await prisma.agentFunction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentFunctions and only return the `functionId`
     * const agentFunctionWithFunctionIdOnly = await prisma.agentFunction.updateManyAndReturn({
     *   select: { functionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentFunctionUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentFunctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentFunction.
     * @param {AgentFunctionUpsertArgs} args - Arguments to update or create a AgentFunction.
     * @example
     * // Update or create a AgentFunction
     * const agentFunction = await prisma.agentFunction.upsert({
     *   create: {
     *     // ... data to create a AgentFunction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentFunction we want to update
     *   }
     * })
     */
    upsert<T extends AgentFunctionUpsertArgs>(args: SelectSubset<T, AgentFunctionUpsertArgs<ExtArgs>>): Prisma__AgentFunctionClient<$Result.GetResult<Prisma.$AgentFunctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentFunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionCountArgs} args - Arguments to filter AgentFunctions to count.
     * @example
     * // Count the number of AgentFunctions
     * const count = await prisma.agentFunction.count({
     *   where: {
     *     // ... the filter for the AgentFunctions we want to count
     *   }
     * })
    **/
    count<T extends AgentFunctionCountArgs>(
      args?: Subset<T, AgentFunctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentFunctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentFunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentFunctionAggregateArgs>(args: Subset<T, AgentFunctionAggregateArgs>): Prisma.PrismaPromise<GetAgentFunctionAggregateType<T>>

    /**
     * Group by AgentFunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFunctionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentFunctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentFunctionGroupByArgs['orderBy'] }
        : { orderBy?: AgentFunctionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentFunctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentFunctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentFunction model
   */
  readonly fields: AgentFunctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentFunction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentFunctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agentWallet<T extends AgentWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentWalletDefaultArgs<ExtArgs>>): Prisma__AgentWalletClient<$Result.GetResult<Prisma.$AgentWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentFunction model
   */
  interface AgentFunctionFieldRefs {
    readonly functionId: FieldRef<"AgentFunction", 'String'>
    readonly functionName: FieldRef<"AgentFunction", 'String'>
    readonly agentWalletAddress: FieldRef<"AgentFunction", 'String'>
    readonly createdAt: FieldRef<"AgentFunction", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentFunction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentFunction findUnique
   */
  export type AgentFunctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * Filter, which AgentFunction to fetch.
     */
    where: AgentFunctionWhereUniqueInput
  }

  /**
   * AgentFunction findUniqueOrThrow
   */
  export type AgentFunctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * Filter, which AgentFunction to fetch.
     */
    where: AgentFunctionWhereUniqueInput
  }

  /**
   * AgentFunction findFirst
   */
  export type AgentFunctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * Filter, which AgentFunction to fetch.
     */
    where?: AgentFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentFunctions to fetch.
     */
    orderBy?: AgentFunctionOrderByWithRelationInput | AgentFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentFunctions.
     */
    cursor?: AgentFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentFunctions.
     */
    distinct?: AgentFunctionScalarFieldEnum | AgentFunctionScalarFieldEnum[]
  }

  /**
   * AgentFunction findFirstOrThrow
   */
  export type AgentFunctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * Filter, which AgentFunction to fetch.
     */
    where?: AgentFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentFunctions to fetch.
     */
    orderBy?: AgentFunctionOrderByWithRelationInput | AgentFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentFunctions.
     */
    cursor?: AgentFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentFunctions.
     */
    distinct?: AgentFunctionScalarFieldEnum | AgentFunctionScalarFieldEnum[]
  }

  /**
   * AgentFunction findMany
   */
  export type AgentFunctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * Filter, which AgentFunctions to fetch.
     */
    where?: AgentFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentFunctions to fetch.
     */
    orderBy?: AgentFunctionOrderByWithRelationInput | AgentFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentFunctions.
     */
    cursor?: AgentFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentFunctions.
     */
    skip?: number
    distinct?: AgentFunctionScalarFieldEnum | AgentFunctionScalarFieldEnum[]
  }

  /**
   * AgentFunction create
   */
  export type AgentFunctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentFunction.
     */
    data: XOR<AgentFunctionCreateInput, AgentFunctionUncheckedCreateInput>
  }

  /**
   * AgentFunction createMany
   */
  export type AgentFunctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentFunctions.
     */
    data: AgentFunctionCreateManyInput | AgentFunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentFunction createManyAndReturn
   */
  export type AgentFunctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * The data used to create many AgentFunctions.
     */
    data: AgentFunctionCreateManyInput | AgentFunctionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentFunction update
   */
  export type AgentFunctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentFunction.
     */
    data: XOR<AgentFunctionUpdateInput, AgentFunctionUncheckedUpdateInput>
    /**
     * Choose, which AgentFunction to update.
     */
    where: AgentFunctionWhereUniqueInput
  }

  /**
   * AgentFunction updateMany
   */
  export type AgentFunctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentFunctions.
     */
    data: XOR<AgentFunctionUpdateManyMutationInput, AgentFunctionUncheckedUpdateManyInput>
    /**
     * Filter which AgentFunctions to update
     */
    where?: AgentFunctionWhereInput
    /**
     * Limit how many AgentFunctions to update.
     */
    limit?: number
  }

  /**
   * AgentFunction updateManyAndReturn
   */
  export type AgentFunctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * The data used to update AgentFunctions.
     */
    data: XOR<AgentFunctionUpdateManyMutationInput, AgentFunctionUncheckedUpdateManyInput>
    /**
     * Filter which AgentFunctions to update
     */
    where?: AgentFunctionWhereInput
    /**
     * Limit how many AgentFunctions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentFunction upsert
   */
  export type AgentFunctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentFunction to update in case it exists.
     */
    where: AgentFunctionWhereUniqueInput
    /**
     * In case the AgentFunction found by the `where` argument doesn't exist, create a new AgentFunction with this data.
     */
    create: XOR<AgentFunctionCreateInput, AgentFunctionUncheckedCreateInput>
    /**
     * In case the AgentFunction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentFunctionUpdateInput, AgentFunctionUncheckedUpdateInput>
  }

  /**
   * AgentFunction delete
   */
  export type AgentFunctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
    /**
     * Filter which AgentFunction to delete.
     */
    where: AgentFunctionWhereUniqueInput
  }

  /**
   * AgentFunction deleteMany
   */
  export type AgentFunctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentFunctions to delete
     */
    where?: AgentFunctionWhereInput
    /**
     * Limit how many AgentFunctions to delete.
     */
    limit?: number
  }

  /**
   * AgentFunction without action
   */
  export type AgentFunctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentFunction
     */
    select?: AgentFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentFunction
     */
    omit?: AgentFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentFunctionInclude<ExtArgs> | null
  }


  /**
   * Model Attestations
   */

  export type AggregateAttestations = {
    _count: AttestationsCountAggregateOutputType | null
    _min: AttestationsMinAggregateOutputType | null
    _max: AttestationsMaxAggregateOutputType | null
  }

  export type AttestationsMinAggregateOutputType = {
    attestationHash: string | null
    isSystemPromptValid: boolean | null
    result: string | null
  }

  export type AttestationsMaxAggregateOutputType = {
    attestationHash: string | null
    isSystemPromptValid: boolean | null
    result: string | null
  }

  export type AttestationsCountAggregateOutputType = {
    attestationHash: number
    isSystemPromptValid: number
    result: number
    functionCalls: number
    jsonResponses: number
    transactionHashes: number
    _all: number
  }


  export type AttestationsMinAggregateInputType = {
    attestationHash?: true
    isSystemPromptValid?: true
    result?: true
  }

  export type AttestationsMaxAggregateInputType = {
    attestationHash?: true
    isSystemPromptValid?: true
    result?: true
  }

  export type AttestationsCountAggregateInputType = {
    attestationHash?: true
    isSystemPromptValid?: true
    result?: true
    functionCalls?: true
    jsonResponses?: true
    transactionHashes?: true
    _all?: true
  }

  export type AttestationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attestations to aggregate.
     */
    where?: AttestationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationsOrderByWithRelationInput | AttestationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttestationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attestations
    **/
    _count?: true | AttestationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttestationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttestationsMaxAggregateInputType
  }

  export type GetAttestationsAggregateType<T extends AttestationsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttestations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttestations[P]>
      : GetScalarType<T[P], AggregateAttestations[P]>
  }




  export type AttestationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttestationsWhereInput
    orderBy?: AttestationsOrderByWithAggregationInput | AttestationsOrderByWithAggregationInput[]
    by: AttestationsScalarFieldEnum[] | AttestationsScalarFieldEnum
    having?: AttestationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttestationsCountAggregateInputType | true
    _min?: AttestationsMinAggregateInputType
    _max?: AttestationsMaxAggregateInputType
  }

  export type AttestationsGroupByOutputType = {
    attestationHash: string
    isSystemPromptValid: boolean
    result: string
    functionCalls: string[]
    jsonResponses: string[]
    transactionHashes: string[]
    _count: AttestationsCountAggregateOutputType | null
    _min: AttestationsMinAggregateOutputType | null
    _max: AttestationsMaxAggregateOutputType | null
  }

  type GetAttestationsGroupByPayload<T extends AttestationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttestationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttestationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttestationsGroupByOutputType[P]>
            : GetScalarType<T[P], AttestationsGroupByOutputType[P]>
        }
      >
    >


  export type AttestationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attestationHash?: boolean
    isSystemPromptValid?: boolean
    result?: boolean
    functionCalls?: boolean
    jsonResponses?: boolean
    transactionHashes?: boolean
  }, ExtArgs["result"]["attestations"]>

  export type AttestationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attestationHash?: boolean
    isSystemPromptValid?: boolean
    result?: boolean
    functionCalls?: boolean
    jsonResponses?: boolean
    transactionHashes?: boolean
  }, ExtArgs["result"]["attestations"]>

  export type AttestationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attestationHash?: boolean
    isSystemPromptValid?: boolean
    result?: boolean
    functionCalls?: boolean
    jsonResponses?: boolean
    transactionHashes?: boolean
  }, ExtArgs["result"]["attestations"]>

  export type AttestationsSelectScalar = {
    attestationHash?: boolean
    isSystemPromptValid?: boolean
    result?: boolean
    functionCalls?: boolean
    jsonResponses?: boolean
    transactionHashes?: boolean
  }

  export type AttestationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attestationHash" | "isSystemPromptValid" | "result" | "functionCalls" | "jsonResponses" | "transactionHashes", ExtArgs["result"]["attestations"]>

  export type $AttestationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attestations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      attestationHash: string
      isSystemPromptValid: boolean
      result: string
      functionCalls: string[]
      jsonResponses: string[]
      transactionHashes: string[]
    }, ExtArgs["result"]["attestations"]>
    composites: {}
  }

  type AttestationsGetPayload<S extends boolean | null | undefined | AttestationsDefaultArgs> = $Result.GetResult<Prisma.$AttestationsPayload, S>

  type AttestationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttestationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttestationsCountAggregateInputType | true
    }

  export interface AttestationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attestations'], meta: { name: 'Attestations' } }
    /**
     * Find zero or one Attestations that matches the filter.
     * @param {AttestationsFindUniqueArgs} args - Arguments to find a Attestations
     * @example
     * // Get one Attestations
     * const attestations = await prisma.attestations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttestationsFindUniqueArgs>(args: SelectSubset<T, AttestationsFindUniqueArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attestations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttestationsFindUniqueOrThrowArgs} args - Arguments to find a Attestations
     * @example
     * // Get one Attestations
     * const attestations = await prisma.attestations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttestationsFindUniqueOrThrowArgs>(args: SelectSubset<T, AttestationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attestations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsFindFirstArgs} args - Arguments to find a Attestations
     * @example
     * // Get one Attestations
     * const attestations = await prisma.attestations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttestationsFindFirstArgs>(args?: SelectSubset<T, AttestationsFindFirstArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attestations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsFindFirstOrThrowArgs} args - Arguments to find a Attestations
     * @example
     * // Get one Attestations
     * const attestations = await prisma.attestations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttestationsFindFirstOrThrowArgs>(args?: SelectSubset<T, AttestationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attestations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attestations
     * const attestations = await prisma.attestations.findMany()
     * 
     * // Get first 10 Attestations
     * const attestations = await prisma.attestations.findMany({ take: 10 })
     * 
     * // Only select the `attestationHash`
     * const attestationsWithAttestationHashOnly = await prisma.attestations.findMany({ select: { attestationHash: true } })
     * 
     */
    findMany<T extends AttestationsFindManyArgs>(args?: SelectSubset<T, AttestationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attestations.
     * @param {AttestationsCreateArgs} args - Arguments to create a Attestations.
     * @example
     * // Create one Attestations
     * const Attestations = await prisma.attestations.create({
     *   data: {
     *     // ... data to create a Attestations
     *   }
     * })
     * 
     */
    create<T extends AttestationsCreateArgs>(args: SelectSubset<T, AttestationsCreateArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attestations.
     * @param {AttestationsCreateManyArgs} args - Arguments to create many Attestations.
     * @example
     * // Create many Attestations
     * const attestations = await prisma.attestations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttestationsCreateManyArgs>(args?: SelectSubset<T, AttestationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attestations and returns the data saved in the database.
     * @param {AttestationsCreateManyAndReturnArgs} args - Arguments to create many Attestations.
     * @example
     * // Create many Attestations
     * const attestations = await prisma.attestations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attestations and only return the `attestationHash`
     * const attestationsWithAttestationHashOnly = await prisma.attestations.createManyAndReturn({
     *   select: { attestationHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttestationsCreateManyAndReturnArgs>(args?: SelectSubset<T, AttestationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attestations.
     * @param {AttestationsDeleteArgs} args - Arguments to delete one Attestations.
     * @example
     * // Delete one Attestations
     * const Attestations = await prisma.attestations.delete({
     *   where: {
     *     // ... filter to delete one Attestations
     *   }
     * })
     * 
     */
    delete<T extends AttestationsDeleteArgs>(args: SelectSubset<T, AttestationsDeleteArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attestations.
     * @param {AttestationsUpdateArgs} args - Arguments to update one Attestations.
     * @example
     * // Update one Attestations
     * const attestations = await prisma.attestations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttestationsUpdateArgs>(args: SelectSubset<T, AttestationsUpdateArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attestations.
     * @param {AttestationsDeleteManyArgs} args - Arguments to filter Attestations to delete.
     * @example
     * // Delete a few Attestations
     * const { count } = await prisma.attestations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttestationsDeleteManyArgs>(args?: SelectSubset<T, AttestationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attestations
     * const attestations = await prisma.attestations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttestationsUpdateManyArgs>(args: SelectSubset<T, AttestationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attestations and returns the data updated in the database.
     * @param {AttestationsUpdateManyAndReturnArgs} args - Arguments to update many Attestations.
     * @example
     * // Update many Attestations
     * const attestations = await prisma.attestations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attestations and only return the `attestationHash`
     * const attestationsWithAttestationHashOnly = await prisma.attestations.updateManyAndReturn({
     *   select: { attestationHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttestationsUpdateManyAndReturnArgs>(args: SelectSubset<T, AttestationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attestations.
     * @param {AttestationsUpsertArgs} args - Arguments to update or create a Attestations.
     * @example
     * // Update or create a Attestations
     * const attestations = await prisma.attestations.upsert({
     *   create: {
     *     // ... data to create a Attestations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attestations we want to update
     *   }
     * })
     */
    upsert<T extends AttestationsUpsertArgs>(args: SelectSubset<T, AttestationsUpsertArgs<ExtArgs>>): Prisma__AttestationsClient<$Result.GetResult<Prisma.$AttestationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsCountArgs} args - Arguments to filter Attestations to count.
     * @example
     * // Count the number of Attestations
     * const count = await prisma.attestations.count({
     *   where: {
     *     // ... the filter for the Attestations we want to count
     *   }
     * })
    **/
    count<T extends AttestationsCountArgs>(
      args?: Subset<T, AttestationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttestationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttestationsAggregateArgs>(args: Subset<T, AttestationsAggregateArgs>): Prisma.PrismaPromise<GetAttestationsAggregateType<T>>

    /**
     * Group by Attestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttestationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttestationsGroupByArgs['orderBy'] }
        : { orderBy?: AttestationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttestationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttestationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attestations model
   */
  readonly fields: AttestationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attestations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttestationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attestations model
   */
  interface AttestationsFieldRefs {
    readonly attestationHash: FieldRef<"Attestations", 'String'>
    readonly isSystemPromptValid: FieldRef<"Attestations", 'Boolean'>
    readonly result: FieldRef<"Attestations", 'String'>
    readonly functionCalls: FieldRef<"Attestations", 'String[]'>
    readonly jsonResponses: FieldRef<"Attestations", 'String[]'>
    readonly transactionHashes: FieldRef<"Attestations", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Attestations findUnique
   */
  export type AttestationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * Filter, which Attestations to fetch.
     */
    where: AttestationsWhereUniqueInput
  }

  /**
   * Attestations findUniqueOrThrow
   */
  export type AttestationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * Filter, which Attestations to fetch.
     */
    where: AttestationsWhereUniqueInput
  }

  /**
   * Attestations findFirst
   */
  export type AttestationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * Filter, which Attestations to fetch.
     */
    where?: AttestationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationsOrderByWithRelationInput | AttestationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attestations.
     */
    cursor?: AttestationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attestations.
     */
    distinct?: AttestationsScalarFieldEnum | AttestationsScalarFieldEnum[]
  }

  /**
   * Attestations findFirstOrThrow
   */
  export type AttestationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * Filter, which Attestations to fetch.
     */
    where?: AttestationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationsOrderByWithRelationInput | AttestationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attestations.
     */
    cursor?: AttestationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attestations.
     */
    distinct?: AttestationsScalarFieldEnum | AttestationsScalarFieldEnum[]
  }

  /**
   * Attestations findMany
   */
  export type AttestationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * Filter, which Attestations to fetch.
     */
    where?: AttestationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationsOrderByWithRelationInput | AttestationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attestations.
     */
    cursor?: AttestationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    distinct?: AttestationsScalarFieldEnum | AttestationsScalarFieldEnum[]
  }

  /**
   * Attestations create
   */
  export type AttestationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * The data needed to create a Attestations.
     */
    data: XOR<AttestationsCreateInput, AttestationsUncheckedCreateInput>
  }

  /**
   * Attestations createMany
   */
  export type AttestationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attestations.
     */
    data: AttestationsCreateManyInput | AttestationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attestations createManyAndReturn
   */
  export type AttestationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * The data used to create many Attestations.
     */
    data: AttestationsCreateManyInput | AttestationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attestations update
   */
  export type AttestationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * The data needed to update a Attestations.
     */
    data: XOR<AttestationsUpdateInput, AttestationsUncheckedUpdateInput>
    /**
     * Choose, which Attestations to update.
     */
    where: AttestationsWhereUniqueInput
  }

  /**
   * Attestations updateMany
   */
  export type AttestationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attestations.
     */
    data: XOR<AttestationsUpdateManyMutationInput, AttestationsUncheckedUpdateManyInput>
    /**
     * Filter which Attestations to update
     */
    where?: AttestationsWhereInput
    /**
     * Limit how many Attestations to update.
     */
    limit?: number
  }

  /**
   * Attestations updateManyAndReturn
   */
  export type AttestationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * The data used to update Attestations.
     */
    data: XOR<AttestationsUpdateManyMutationInput, AttestationsUncheckedUpdateManyInput>
    /**
     * Filter which Attestations to update
     */
    where?: AttestationsWhereInput
    /**
     * Limit how many Attestations to update.
     */
    limit?: number
  }

  /**
   * Attestations upsert
   */
  export type AttestationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * The filter to search for the Attestations to update in case it exists.
     */
    where: AttestationsWhereUniqueInput
    /**
     * In case the Attestations found by the `where` argument doesn't exist, create a new Attestations with this data.
     */
    create: XOR<AttestationsCreateInput, AttestationsUncheckedCreateInput>
    /**
     * In case the Attestations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttestationsUpdateInput, AttestationsUncheckedUpdateInput>
  }

  /**
   * Attestations delete
   */
  export type AttestationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
    /**
     * Filter which Attestations to delete.
     */
    where: AttestationsWhereUniqueInput
  }

  /**
   * Attestations deleteMany
   */
  export type AttestationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attestations to delete
     */
    where?: AttestationsWhereInput
    /**
     * Limit how many Attestations to delete.
     */
    limit?: number
  }

  /**
   * Attestations without action
   */
  export type AttestationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestations
     */
    select?: AttestationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestations
     */
    omit?: AttestationsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userAddress: 'userAddress',
    userId: 'userId',
    privyUserId: 'privyUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AgentWalletScalarFieldEnum: {
    walletAddress: 'walletAddress',
    privateKey: 'privateKey',
    ownerAddress: 'ownerAddress',
    domain: 'domain',
    systemPrompt: 'systemPrompt',
    dbName: 'dbName',
    dbUser: 'dbUser',
    dbPassword: 'dbPassword',
    dbHost: 'dbHost',
    dbPort: 'dbPort',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentWalletScalarFieldEnum = (typeof AgentWalletScalarFieldEnum)[keyof typeof AgentWalletScalarFieldEnum]


  export const AgentFunctionScalarFieldEnum: {
    functionId: 'functionId',
    functionName: 'functionName',
    agentWalletAddress: 'agentWalletAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentFunctionScalarFieldEnum = (typeof AgentFunctionScalarFieldEnum)[keyof typeof AgentFunctionScalarFieldEnum]


  export const AttestationsScalarFieldEnum: {
    attestationHash: 'attestationHash',
    isSystemPromptValid: 'isSystemPromptValid',
    result: 'result',
    functionCalls: 'functionCalls',
    jsonResponses: 'jsonResponses',
    transactionHashes: 'transactionHashes'
  };

  export type AttestationsScalarFieldEnum = (typeof AttestationsScalarFieldEnum)[keyof typeof AttestationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userAddress?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    privyUserId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    agentWallets?: AgentWalletListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userAddress?: SortOrder
    userId?: SortOrder
    privyUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentWallets?: AgentWalletOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userAddress?: string
    userId?: string
    privyUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    agentWallets?: AgentWalletListRelationFilter
  }, "userAddress" | "userAddress" | "userId" | "privyUserId">

  export type UserOrderByWithAggregationInput = {
    userAddress?: SortOrder
    userId?: SortOrder
    privyUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userAddress?: StringWithAggregatesFilter<"User"> | string
    userId?: StringWithAggregatesFilter<"User"> | string
    privyUserId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AgentWalletWhereInput = {
    AND?: AgentWalletWhereInput | AgentWalletWhereInput[]
    OR?: AgentWalletWhereInput[]
    NOT?: AgentWalletWhereInput | AgentWalletWhereInput[]
    walletAddress?: StringFilter<"AgentWallet"> | string
    privateKey?: StringFilter<"AgentWallet"> | string
    ownerAddress?: StringFilter<"AgentWallet"> | string
    domain?: StringFilter<"AgentWallet"> | string
    systemPrompt?: StringFilter<"AgentWallet"> | string
    dbName?: StringFilter<"AgentWallet"> | string
    dbUser?: StringFilter<"AgentWallet"> | string
    dbPassword?: StringFilter<"AgentWallet"> | string
    dbHost?: StringFilter<"AgentWallet"> | string
    dbPort?: IntFilter<"AgentWallet"> | number
    createdAt?: DateTimeFilter<"AgentWallet"> | Date | string
    updatedAt?: DateTimeFilter<"AgentWallet"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    agentFunctions?: AgentFunctionListRelationFilter
  }

  export type AgentWalletOrderByWithRelationInput = {
    walletAddress?: SortOrder
    privateKey?: SortOrder
    ownerAddress?: SortOrder
    domain?: SortOrder
    systemPrompt?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    dbHost?: SortOrder
    dbPort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    agentFunctions?: AgentFunctionOrderByRelationAggregateInput
  }

  export type AgentWalletWhereUniqueInput = Prisma.AtLeast<{
    walletAddress?: string
    AND?: AgentWalletWhereInput | AgentWalletWhereInput[]
    OR?: AgentWalletWhereInput[]
    NOT?: AgentWalletWhereInput | AgentWalletWhereInput[]
    privateKey?: StringFilter<"AgentWallet"> | string
    ownerAddress?: StringFilter<"AgentWallet"> | string
    domain?: StringFilter<"AgentWallet"> | string
    systemPrompt?: StringFilter<"AgentWallet"> | string
    dbName?: StringFilter<"AgentWallet"> | string
    dbUser?: StringFilter<"AgentWallet"> | string
    dbPassword?: StringFilter<"AgentWallet"> | string
    dbHost?: StringFilter<"AgentWallet"> | string
    dbPort?: IntFilter<"AgentWallet"> | number
    createdAt?: DateTimeFilter<"AgentWallet"> | Date | string
    updatedAt?: DateTimeFilter<"AgentWallet"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    agentFunctions?: AgentFunctionListRelationFilter
  }, "walletAddress" | "walletAddress">

  export type AgentWalletOrderByWithAggregationInput = {
    walletAddress?: SortOrder
    privateKey?: SortOrder
    ownerAddress?: SortOrder
    domain?: SortOrder
    systemPrompt?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    dbHost?: SortOrder
    dbPort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentWalletCountOrderByAggregateInput
    _avg?: AgentWalletAvgOrderByAggregateInput
    _max?: AgentWalletMaxOrderByAggregateInput
    _min?: AgentWalletMinOrderByAggregateInput
    _sum?: AgentWalletSumOrderByAggregateInput
  }

  export type AgentWalletScalarWhereWithAggregatesInput = {
    AND?: AgentWalletScalarWhereWithAggregatesInput | AgentWalletScalarWhereWithAggregatesInput[]
    OR?: AgentWalletScalarWhereWithAggregatesInput[]
    NOT?: AgentWalletScalarWhereWithAggregatesInput | AgentWalletScalarWhereWithAggregatesInput[]
    walletAddress?: StringWithAggregatesFilter<"AgentWallet"> | string
    privateKey?: StringWithAggregatesFilter<"AgentWallet"> | string
    ownerAddress?: StringWithAggregatesFilter<"AgentWallet"> | string
    domain?: StringWithAggregatesFilter<"AgentWallet"> | string
    systemPrompt?: StringWithAggregatesFilter<"AgentWallet"> | string
    dbName?: StringWithAggregatesFilter<"AgentWallet"> | string
    dbUser?: StringWithAggregatesFilter<"AgentWallet"> | string
    dbPassword?: StringWithAggregatesFilter<"AgentWallet"> | string
    dbHost?: StringWithAggregatesFilter<"AgentWallet"> | string
    dbPort?: IntWithAggregatesFilter<"AgentWallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AgentWallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentWallet"> | Date | string
  }

  export type AgentFunctionWhereInput = {
    AND?: AgentFunctionWhereInput | AgentFunctionWhereInput[]
    OR?: AgentFunctionWhereInput[]
    NOT?: AgentFunctionWhereInput | AgentFunctionWhereInput[]
    functionId?: StringFilter<"AgentFunction"> | string
    functionName?: StringFilter<"AgentFunction"> | string
    agentWalletAddress?: StringFilter<"AgentFunction"> | string
    createdAt?: DateTimeFilter<"AgentFunction"> | Date | string
    updatedAt?: DateTimeFilter<"AgentFunction"> | Date | string
    agentWallet?: XOR<AgentWalletScalarRelationFilter, AgentWalletWhereInput>
  }

  export type AgentFunctionOrderByWithRelationInput = {
    functionId?: SortOrder
    functionName?: SortOrder
    agentWalletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentWallet?: AgentWalletOrderByWithRelationInput
  }

  export type AgentFunctionWhereUniqueInput = Prisma.AtLeast<{
    functionId?: string
    functionName?: string
    AND?: AgentFunctionWhereInput | AgentFunctionWhereInput[]
    OR?: AgentFunctionWhereInput[]
    NOT?: AgentFunctionWhereInput | AgentFunctionWhereInput[]
    agentWalletAddress?: StringFilter<"AgentFunction"> | string
    createdAt?: DateTimeFilter<"AgentFunction"> | Date | string
    updatedAt?: DateTimeFilter<"AgentFunction"> | Date | string
    agentWallet?: XOR<AgentWalletScalarRelationFilter, AgentWalletWhereInput>
  }, "functionId" | "functionName">

  export type AgentFunctionOrderByWithAggregationInput = {
    functionId?: SortOrder
    functionName?: SortOrder
    agentWalletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentFunctionCountOrderByAggregateInput
    _max?: AgentFunctionMaxOrderByAggregateInput
    _min?: AgentFunctionMinOrderByAggregateInput
  }

  export type AgentFunctionScalarWhereWithAggregatesInput = {
    AND?: AgentFunctionScalarWhereWithAggregatesInput | AgentFunctionScalarWhereWithAggregatesInput[]
    OR?: AgentFunctionScalarWhereWithAggregatesInput[]
    NOT?: AgentFunctionScalarWhereWithAggregatesInput | AgentFunctionScalarWhereWithAggregatesInput[]
    functionId?: StringWithAggregatesFilter<"AgentFunction"> | string
    functionName?: StringWithAggregatesFilter<"AgentFunction"> | string
    agentWalletAddress?: StringWithAggregatesFilter<"AgentFunction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgentFunction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentFunction"> | Date | string
  }

  export type AttestationsWhereInput = {
    AND?: AttestationsWhereInput | AttestationsWhereInput[]
    OR?: AttestationsWhereInput[]
    NOT?: AttestationsWhereInput | AttestationsWhereInput[]
    attestationHash?: StringFilter<"Attestations"> | string
    isSystemPromptValid?: BoolFilter<"Attestations"> | boolean
    result?: StringFilter<"Attestations"> | string
    functionCalls?: StringNullableListFilter<"Attestations">
    jsonResponses?: StringNullableListFilter<"Attestations">
    transactionHashes?: StringNullableListFilter<"Attestations">
  }

  export type AttestationsOrderByWithRelationInput = {
    attestationHash?: SortOrder
    isSystemPromptValid?: SortOrder
    result?: SortOrder
    functionCalls?: SortOrder
    jsonResponses?: SortOrder
    transactionHashes?: SortOrder
  }

  export type AttestationsWhereUniqueInput = Prisma.AtLeast<{
    attestationHash?: string
    AND?: AttestationsWhereInput | AttestationsWhereInput[]
    OR?: AttestationsWhereInput[]
    NOT?: AttestationsWhereInput | AttestationsWhereInput[]
    isSystemPromptValid?: BoolFilter<"Attestations"> | boolean
    result?: StringFilter<"Attestations"> | string
    functionCalls?: StringNullableListFilter<"Attestations">
    jsonResponses?: StringNullableListFilter<"Attestations">
    transactionHashes?: StringNullableListFilter<"Attestations">
  }, "attestationHash">

  export type AttestationsOrderByWithAggregationInput = {
    attestationHash?: SortOrder
    isSystemPromptValid?: SortOrder
    result?: SortOrder
    functionCalls?: SortOrder
    jsonResponses?: SortOrder
    transactionHashes?: SortOrder
    _count?: AttestationsCountOrderByAggregateInput
    _max?: AttestationsMaxOrderByAggregateInput
    _min?: AttestationsMinOrderByAggregateInput
  }

  export type AttestationsScalarWhereWithAggregatesInput = {
    AND?: AttestationsScalarWhereWithAggregatesInput | AttestationsScalarWhereWithAggregatesInput[]
    OR?: AttestationsScalarWhereWithAggregatesInput[]
    NOT?: AttestationsScalarWhereWithAggregatesInput | AttestationsScalarWhereWithAggregatesInput[]
    attestationHash?: StringWithAggregatesFilter<"Attestations"> | string
    isSystemPromptValid?: BoolWithAggregatesFilter<"Attestations"> | boolean
    result?: StringWithAggregatesFilter<"Attestations"> | string
    functionCalls?: StringNullableListFilter<"Attestations">
    jsonResponses?: StringNullableListFilter<"Attestations">
    transactionHashes?: StringNullableListFilter<"Attestations">
  }

  export type UserCreateInput = {
    userAddress: string
    userId?: string
    privyUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agentWallets?: AgentWalletCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    userAddress: string
    userId?: string
    privyUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agentWallets?: AgentWalletUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privyUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentWallets?: AgentWalletUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privyUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentWallets?: AgentWalletUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    userAddress: string
    userId?: string
    privyUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privyUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privyUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentWalletCreateInput = {
    walletAddress: string
    privateKey: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAgentWalletsInput
    agentFunctions?: AgentFunctionCreateNestedManyWithoutAgentWalletInput
  }

  export type AgentWalletUncheckedCreateInput = {
    walletAddress: string
    privateKey: string
    ownerAddress: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agentFunctions?: AgentFunctionUncheckedCreateNestedManyWithoutAgentWalletInput
  }

  export type AgentWalletUpdateInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAgentWalletsNestedInput
    agentFunctions?: AgentFunctionUpdateManyWithoutAgentWalletNestedInput
  }

  export type AgentWalletUncheckedUpdateInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentFunctions?: AgentFunctionUncheckedUpdateManyWithoutAgentWalletNestedInput
  }

  export type AgentWalletCreateManyInput = {
    walletAddress: string
    privateKey: string
    ownerAddress: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentWalletUpdateManyMutationInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentWalletUncheckedUpdateManyInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionCreateInput = {
    functionId: string
    functionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agentWallet: AgentWalletCreateNestedOneWithoutAgentFunctionsInput
  }

  export type AgentFunctionUncheckedCreateInput = {
    functionId: string
    functionName: string
    agentWalletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentFunctionUpdateInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentWallet?: AgentWalletUpdateOneRequiredWithoutAgentFunctionsNestedInput
  }

  export type AgentFunctionUncheckedUpdateInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    agentWalletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionCreateManyInput = {
    functionId: string
    functionName: string
    agentWalletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentFunctionUpdateManyMutationInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionUncheckedUpdateManyInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    agentWalletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttestationsCreateInput = {
    attestationHash: string
    isSystemPromptValid: boolean
    result: string
    functionCalls?: AttestationsCreatefunctionCallsInput | string[]
    jsonResponses?: AttestationsCreatejsonResponsesInput | string[]
    transactionHashes?: AttestationsCreatetransactionHashesInput | string[]
  }

  export type AttestationsUncheckedCreateInput = {
    attestationHash: string
    isSystemPromptValid: boolean
    result: string
    functionCalls?: AttestationsCreatefunctionCallsInput | string[]
    jsonResponses?: AttestationsCreatejsonResponsesInput | string[]
    transactionHashes?: AttestationsCreatetransactionHashesInput | string[]
  }

  export type AttestationsUpdateInput = {
    attestationHash?: StringFieldUpdateOperationsInput | string
    isSystemPromptValid?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    functionCalls?: AttestationsUpdatefunctionCallsInput | string[]
    jsonResponses?: AttestationsUpdatejsonResponsesInput | string[]
    transactionHashes?: AttestationsUpdatetransactionHashesInput | string[]
  }

  export type AttestationsUncheckedUpdateInput = {
    attestationHash?: StringFieldUpdateOperationsInput | string
    isSystemPromptValid?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    functionCalls?: AttestationsUpdatefunctionCallsInput | string[]
    jsonResponses?: AttestationsUpdatejsonResponsesInput | string[]
    transactionHashes?: AttestationsUpdatetransactionHashesInput | string[]
  }

  export type AttestationsCreateManyInput = {
    attestationHash: string
    isSystemPromptValid: boolean
    result: string
    functionCalls?: AttestationsCreatefunctionCallsInput | string[]
    jsonResponses?: AttestationsCreatejsonResponsesInput | string[]
    transactionHashes?: AttestationsCreatetransactionHashesInput | string[]
  }

  export type AttestationsUpdateManyMutationInput = {
    attestationHash?: StringFieldUpdateOperationsInput | string
    isSystemPromptValid?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    functionCalls?: AttestationsUpdatefunctionCallsInput | string[]
    jsonResponses?: AttestationsUpdatejsonResponsesInput | string[]
    transactionHashes?: AttestationsUpdatetransactionHashesInput | string[]
  }

  export type AttestationsUncheckedUpdateManyInput = {
    attestationHash?: StringFieldUpdateOperationsInput | string
    isSystemPromptValid?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    functionCalls?: AttestationsUpdatefunctionCallsInput | string[]
    jsonResponses?: AttestationsUpdatejsonResponsesInput | string[]
    transactionHashes?: AttestationsUpdatetransactionHashesInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AgentWalletListRelationFilter = {
    every?: AgentWalletWhereInput
    some?: AgentWalletWhereInput
    none?: AgentWalletWhereInput
  }

  export type AgentWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userAddress?: SortOrder
    userId?: SortOrder
    privyUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userAddress?: SortOrder
    userId?: SortOrder
    privyUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userAddress?: SortOrder
    userId?: SortOrder
    privyUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AgentFunctionListRelationFilter = {
    every?: AgentFunctionWhereInput
    some?: AgentFunctionWhereInput
    none?: AgentFunctionWhereInput
  }

  export type AgentFunctionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentWalletCountOrderByAggregateInput = {
    walletAddress?: SortOrder
    privateKey?: SortOrder
    ownerAddress?: SortOrder
    domain?: SortOrder
    systemPrompt?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    dbHost?: SortOrder
    dbPort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentWalletAvgOrderByAggregateInput = {
    dbPort?: SortOrder
  }

  export type AgentWalletMaxOrderByAggregateInput = {
    walletAddress?: SortOrder
    privateKey?: SortOrder
    ownerAddress?: SortOrder
    domain?: SortOrder
    systemPrompt?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    dbHost?: SortOrder
    dbPort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentWalletMinOrderByAggregateInput = {
    walletAddress?: SortOrder
    privateKey?: SortOrder
    ownerAddress?: SortOrder
    domain?: SortOrder
    systemPrompt?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    dbHost?: SortOrder
    dbPort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentWalletSumOrderByAggregateInput = {
    dbPort?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AgentWalletScalarRelationFilter = {
    is?: AgentWalletWhereInput
    isNot?: AgentWalletWhereInput
  }

  export type AgentFunctionCountOrderByAggregateInput = {
    functionId?: SortOrder
    functionName?: SortOrder
    agentWalletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentFunctionMaxOrderByAggregateInput = {
    functionId?: SortOrder
    functionName?: SortOrder
    agentWalletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentFunctionMinOrderByAggregateInput = {
    functionId?: SortOrder
    functionName?: SortOrder
    agentWalletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AttestationsCountOrderByAggregateInput = {
    attestationHash?: SortOrder
    isSystemPromptValid?: SortOrder
    result?: SortOrder
    functionCalls?: SortOrder
    jsonResponses?: SortOrder
    transactionHashes?: SortOrder
  }

  export type AttestationsMaxOrderByAggregateInput = {
    attestationHash?: SortOrder
    isSystemPromptValid?: SortOrder
    result?: SortOrder
  }

  export type AttestationsMinOrderByAggregateInput = {
    attestationHash?: SortOrder
    isSystemPromptValid?: SortOrder
    result?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AgentWalletCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AgentWalletCreateWithoutOwnerInput, AgentWalletUncheckedCreateWithoutOwnerInput> | AgentWalletCreateWithoutOwnerInput[] | AgentWalletUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentWalletCreateOrConnectWithoutOwnerInput | AgentWalletCreateOrConnectWithoutOwnerInput[]
    createMany?: AgentWalletCreateManyOwnerInputEnvelope
    connect?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
  }

  export type AgentWalletUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AgentWalletCreateWithoutOwnerInput, AgentWalletUncheckedCreateWithoutOwnerInput> | AgentWalletCreateWithoutOwnerInput[] | AgentWalletUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentWalletCreateOrConnectWithoutOwnerInput | AgentWalletCreateOrConnectWithoutOwnerInput[]
    createMany?: AgentWalletCreateManyOwnerInputEnvelope
    connect?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AgentWalletUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AgentWalletCreateWithoutOwnerInput, AgentWalletUncheckedCreateWithoutOwnerInput> | AgentWalletCreateWithoutOwnerInput[] | AgentWalletUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentWalletCreateOrConnectWithoutOwnerInput | AgentWalletCreateOrConnectWithoutOwnerInput[]
    upsert?: AgentWalletUpsertWithWhereUniqueWithoutOwnerInput | AgentWalletUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AgentWalletCreateManyOwnerInputEnvelope
    set?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    disconnect?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    delete?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    connect?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    update?: AgentWalletUpdateWithWhereUniqueWithoutOwnerInput | AgentWalletUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AgentWalletUpdateManyWithWhereWithoutOwnerInput | AgentWalletUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AgentWalletScalarWhereInput | AgentWalletScalarWhereInput[]
  }

  export type AgentWalletUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AgentWalletCreateWithoutOwnerInput, AgentWalletUncheckedCreateWithoutOwnerInput> | AgentWalletCreateWithoutOwnerInput[] | AgentWalletUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentWalletCreateOrConnectWithoutOwnerInput | AgentWalletCreateOrConnectWithoutOwnerInput[]
    upsert?: AgentWalletUpsertWithWhereUniqueWithoutOwnerInput | AgentWalletUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AgentWalletCreateManyOwnerInputEnvelope
    set?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    disconnect?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    delete?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    connect?: AgentWalletWhereUniqueInput | AgentWalletWhereUniqueInput[]
    update?: AgentWalletUpdateWithWhereUniqueWithoutOwnerInput | AgentWalletUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AgentWalletUpdateManyWithWhereWithoutOwnerInput | AgentWalletUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AgentWalletScalarWhereInput | AgentWalletScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAgentWalletsInput = {
    create?: XOR<UserCreateWithoutAgentWalletsInput, UserUncheckedCreateWithoutAgentWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type AgentFunctionCreateNestedManyWithoutAgentWalletInput = {
    create?: XOR<AgentFunctionCreateWithoutAgentWalletInput, AgentFunctionUncheckedCreateWithoutAgentWalletInput> | AgentFunctionCreateWithoutAgentWalletInput[] | AgentFunctionUncheckedCreateWithoutAgentWalletInput[]
    connectOrCreate?: AgentFunctionCreateOrConnectWithoutAgentWalletInput | AgentFunctionCreateOrConnectWithoutAgentWalletInput[]
    createMany?: AgentFunctionCreateManyAgentWalletInputEnvelope
    connect?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
  }

  export type AgentFunctionUncheckedCreateNestedManyWithoutAgentWalletInput = {
    create?: XOR<AgentFunctionCreateWithoutAgentWalletInput, AgentFunctionUncheckedCreateWithoutAgentWalletInput> | AgentFunctionCreateWithoutAgentWalletInput[] | AgentFunctionUncheckedCreateWithoutAgentWalletInput[]
    connectOrCreate?: AgentFunctionCreateOrConnectWithoutAgentWalletInput | AgentFunctionCreateOrConnectWithoutAgentWalletInput[]
    createMany?: AgentFunctionCreateManyAgentWalletInputEnvelope
    connect?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAgentWalletsNestedInput = {
    create?: XOR<UserCreateWithoutAgentWalletsInput, UserUncheckedCreateWithoutAgentWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentWalletsInput
    upsert?: UserUpsertWithoutAgentWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgentWalletsInput, UserUpdateWithoutAgentWalletsInput>, UserUncheckedUpdateWithoutAgentWalletsInput>
  }

  export type AgentFunctionUpdateManyWithoutAgentWalletNestedInput = {
    create?: XOR<AgentFunctionCreateWithoutAgentWalletInput, AgentFunctionUncheckedCreateWithoutAgentWalletInput> | AgentFunctionCreateWithoutAgentWalletInput[] | AgentFunctionUncheckedCreateWithoutAgentWalletInput[]
    connectOrCreate?: AgentFunctionCreateOrConnectWithoutAgentWalletInput | AgentFunctionCreateOrConnectWithoutAgentWalletInput[]
    upsert?: AgentFunctionUpsertWithWhereUniqueWithoutAgentWalletInput | AgentFunctionUpsertWithWhereUniqueWithoutAgentWalletInput[]
    createMany?: AgentFunctionCreateManyAgentWalletInputEnvelope
    set?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    disconnect?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    delete?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    connect?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    update?: AgentFunctionUpdateWithWhereUniqueWithoutAgentWalletInput | AgentFunctionUpdateWithWhereUniqueWithoutAgentWalletInput[]
    updateMany?: AgentFunctionUpdateManyWithWhereWithoutAgentWalletInput | AgentFunctionUpdateManyWithWhereWithoutAgentWalletInput[]
    deleteMany?: AgentFunctionScalarWhereInput | AgentFunctionScalarWhereInput[]
  }

  export type AgentFunctionUncheckedUpdateManyWithoutAgentWalletNestedInput = {
    create?: XOR<AgentFunctionCreateWithoutAgentWalletInput, AgentFunctionUncheckedCreateWithoutAgentWalletInput> | AgentFunctionCreateWithoutAgentWalletInput[] | AgentFunctionUncheckedCreateWithoutAgentWalletInput[]
    connectOrCreate?: AgentFunctionCreateOrConnectWithoutAgentWalletInput | AgentFunctionCreateOrConnectWithoutAgentWalletInput[]
    upsert?: AgentFunctionUpsertWithWhereUniqueWithoutAgentWalletInput | AgentFunctionUpsertWithWhereUniqueWithoutAgentWalletInput[]
    createMany?: AgentFunctionCreateManyAgentWalletInputEnvelope
    set?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    disconnect?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    delete?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    connect?: AgentFunctionWhereUniqueInput | AgentFunctionWhereUniqueInput[]
    update?: AgentFunctionUpdateWithWhereUniqueWithoutAgentWalletInput | AgentFunctionUpdateWithWhereUniqueWithoutAgentWalletInput[]
    updateMany?: AgentFunctionUpdateManyWithWhereWithoutAgentWalletInput | AgentFunctionUpdateManyWithWhereWithoutAgentWalletInput[]
    deleteMany?: AgentFunctionScalarWhereInput | AgentFunctionScalarWhereInput[]
  }

  export type AgentWalletCreateNestedOneWithoutAgentFunctionsInput = {
    create?: XOR<AgentWalletCreateWithoutAgentFunctionsInput, AgentWalletUncheckedCreateWithoutAgentFunctionsInput>
    connectOrCreate?: AgentWalletCreateOrConnectWithoutAgentFunctionsInput
    connect?: AgentWalletWhereUniqueInput
  }

  export type AgentWalletUpdateOneRequiredWithoutAgentFunctionsNestedInput = {
    create?: XOR<AgentWalletCreateWithoutAgentFunctionsInput, AgentWalletUncheckedCreateWithoutAgentFunctionsInput>
    connectOrCreate?: AgentWalletCreateOrConnectWithoutAgentFunctionsInput
    upsert?: AgentWalletUpsertWithoutAgentFunctionsInput
    connect?: AgentWalletWhereUniqueInput
    update?: XOR<XOR<AgentWalletUpdateToOneWithWhereWithoutAgentFunctionsInput, AgentWalletUpdateWithoutAgentFunctionsInput>, AgentWalletUncheckedUpdateWithoutAgentFunctionsInput>
  }

  export type AttestationsCreatefunctionCallsInput = {
    set: string[]
  }

  export type AttestationsCreatejsonResponsesInput = {
    set: string[]
  }

  export type AttestationsCreatetransactionHashesInput = {
    set: string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AttestationsUpdatefunctionCallsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AttestationsUpdatejsonResponsesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AttestationsUpdatetransactionHashesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AgentWalletCreateWithoutOwnerInput = {
    walletAddress: string
    privateKey: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agentFunctions?: AgentFunctionCreateNestedManyWithoutAgentWalletInput
  }

  export type AgentWalletUncheckedCreateWithoutOwnerInput = {
    walletAddress: string
    privateKey: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agentFunctions?: AgentFunctionUncheckedCreateNestedManyWithoutAgentWalletInput
  }

  export type AgentWalletCreateOrConnectWithoutOwnerInput = {
    where: AgentWalletWhereUniqueInput
    create: XOR<AgentWalletCreateWithoutOwnerInput, AgentWalletUncheckedCreateWithoutOwnerInput>
  }

  export type AgentWalletCreateManyOwnerInputEnvelope = {
    data: AgentWalletCreateManyOwnerInput | AgentWalletCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AgentWalletUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AgentWalletWhereUniqueInput
    update: XOR<AgentWalletUpdateWithoutOwnerInput, AgentWalletUncheckedUpdateWithoutOwnerInput>
    create: XOR<AgentWalletCreateWithoutOwnerInput, AgentWalletUncheckedCreateWithoutOwnerInput>
  }

  export type AgentWalletUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AgentWalletWhereUniqueInput
    data: XOR<AgentWalletUpdateWithoutOwnerInput, AgentWalletUncheckedUpdateWithoutOwnerInput>
  }

  export type AgentWalletUpdateManyWithWhereWithoutOwnerInput = {
    where: AgentWalletScalarWhereInput
    data: XOR<AgentWalletUpdateManyMutationInput, AgentWalletUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AgentWalletScalarWhereInput = {
    AND?: AgentWalletScalarWhereInput | AgentWalletScalarWhereInput[]
    OR?: AgentWalletScalarWhereInput[]
    NOT?: AgentWalletScalarWhereInput | AgentWalletScalarWhereInput[]
    walletAddress?: StringFilter<"AgentWallet"> | string
    privateKey?: StringFilter<"AgentWallet"> | string
    ownerAddress?: StringFilter<"AgentWallet"> | string
    domain?: StringFilter<"AgentWallet"> | string
    systemPrompt?: StringFilter<"AgentWallet"> | string
    dbName?: StringFilter<"AgentWallet"> | string
    dbUser?: StringFilter<"AgentWallet"> | string
    dbPassword?: StringFilter<"AgentWallet"> | string
    dbHost?: StringFilter<"AgentWallet"> | string
    dbPort?: IntFilter<"AgentWallet"> | number
    createdAt?: DateTimeFilter<"AgentWallet"> | Date | string
    updatedAt?: DateTimeFilter<"AgentWallet"> | Date | string
  }

  export type UserCreateWithoutAgentWalletsInput = {
    userAddress: string
    userId?: string
    privyUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAgentWalletsInput = {
    userAddress: string
    userId?: string
    privyUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAgentWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentWalletsInput, UserUncheckedCreateWithoutAgentWalletsInput>
  }

  export type AgentFunctionCreateWithoutAgentWalletInput = {
    functionId: string
    functionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentFunctionUncheckedCreateWithoutAgentWalletInput = {
    functionId: string
    functionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentFunctionCreateOrConnectWithoutAgentWalletInput = {
    where: AgentFunctionWhereUniqueInput
    create: XOR<AgentFunctionCreateWithoutAgentWalletInput, AgentFunctionUncheckedCreateWithoutAgentWalletInput>
  }

  export type AgentFunctionCreateManyAgentWalletInputEnvelope = {
    data: AgentFunctionCreateManyAgentWalletInput | AgentFunctionCreateManyAgentWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAgentWalletsInput = {
    update: XOR<UserUpdateWithoutAgentWalletsInput, UserUncheckedUpdateWithoutAgentWalletsInput>
    create: XOR<UserCreateWithoutAgentWalletsInput, UserUncheckedCreateWithoutAgentWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgentWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgentWalletsInput, UserUncheckedUpdateWithoutAgentWalletsInput>
  }

  export type UserUpdateWithoutAgentWalletsInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privyUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAgentWalletsInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privyUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionUpsertWithWhereUniqueWithoutAgentWalletInput = {
    where: AgentFunctionWhereUniqueInput
    update: XOR<AgentFunctionUpdateWithoutAgentWalletInput, AgentFunctionUncheckedUpdateWithoutAgentWalletInput>
    create: XOR<AgentFunctionCreateWithoutAgentWalletInput, AgentFunctionUncheckedCreateWithoutAgentWalletInput>
  }

  export type AgentFunctionUpdateWithWhereUniqueWithoutAgentWalletInput = {
    where: AgentFunctionWhereUniqueInput
    data: XOR<AgentFunctionUpdateWithoutAgentWalletInput, AgentFunctionUncheckedUpdateWithoutAgentWalletInput>
  }

  export type AgentFunctionUpdateManyWithWhereWithoutAgentWalletInput = {
    where: AgentFunctionScalarWhereInput
    data: XOR<AgentFunctionUpdateManyMutationInput, AgentFunctionUncheckedUpdateManyWithoutAgentWalletInput>
  }

  export type AgentFunctionScalarWhereInput = {
    AND?: AgentFunctionScalarWhereInput | AgentFunctionScalarWhereInput[]
    OR?: AgentFunctionScalarWhereInput[]
    NOT?: AgentFunctionScalarWhereInput | AgentFunctionScalarWhereInput[]
    functionId?: StringFilter<"AgentFunction"> | string
    functionName?: StringFilter<"AgentFunction"> | string
    agentWalletAddress?: StringFilter<"AgentFunction"> | string
    createdAt?: DateTimeFilter<"AgentFunction"> | Date | string
    updatedAt?: DateTimeFilter<"AgentFunction"> | Date | string
  }

  export type AgentWalletCreateWithoutAgentFunctionsInput = {
    walletAddress: string
    privateKey: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAgentWalletsInput
  }

  export type AgentWalletUncheckedCreateWithoutAgentFunctionsInput = {
    walletAddress: string
    privateKey: string
    ownerAddress: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentWalletCreateOrConnectWithoutAgentFunctionsInput = {
    where: AgentWalletWhereUniqueInput
    create: XOR<AgentWalletCreateWithoutAgentFunctionsInput, AgentWalletUncheckedCreateWithoutAgentFunctionsInput>
  }

  export type AgentWalletUpsertWithoutAgentFunctionsInput = {
    update: XOR<AgentWalletUpdateWithoutAgentFunctionsInput, AgentWalletUncheckedUpdateWithoutAgentFunctionsInput>
    create: XOR<AgentWalletCreateWithoutAgentFunctionsInput, AgentWalletUncheckedCreateWithoutAgentFunctionsInput>
    where?: AgentWalletWhereInput
  }

  export type AgentWalletUpdateToOneWithWhereWithoutAgentFunctionsInput = {
    where?: AgentWalletWhereInput
    data: XOR<AgentWalletUpdateWithoutAgentFunctionsInput, AgentWalletUncheckedUpdateWithoutAgentFunctionsInput>
  }

  export type AgentWalletUpdateWithoutAgentFunctionsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAgentWalletsNestedInput
  }

  export type AgentWalletUncheckedUpdateWithoutAgentFunctionsInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    ownerAddress?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentWalletCreateManyOwnerInput = {
    walletAddress: string
    privateKey: string
    domain: string
    systemPrompt: string
    dbName: string
    dbUser: string
    dbPassword: string
    dbHost: string
    dbPort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentWalletUpdateWithoutOwnerInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentFunctions?: AgentFunctionUpdateManyWithoutAgentWalletNestedInput
  }

  export type AgentWalletUncheckedUpdateWithoutOwnerInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentFunctions?: AgentFunctionUncheckedUpdateManyWithoutAgentWalletNestedInput
  }

  export type AgentWalletUncheckedUpdateManyWithoutOwnerInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbPort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionCreateManyAgentWalletInput = {
    functionId: string
    functionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentFunctionUpdateWithoutAgentWalletInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionUncheckedUpdateWithoutAgentWalletInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentFunctionUncheckedUpdateManyWithoutAgentWalletInput = {
    functionId?: StringFieldUpdateOperationsInput | string
    functionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}