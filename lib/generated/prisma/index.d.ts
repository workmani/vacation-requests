
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
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TimeOffRequest
 * 
 */
export type TimeOffRequest = $Result.DefaultSelection<Prisma.$TimeOffRequestPayload>
/**
 * Model RequestComment
 * 
 */
export type RequestComment = $Result.DefaultSelection<Prisma.$RequestCommentPayload>
/**
 * Model TimeOffBalance
 * 
 */
export type TimeOffBalance = $Result.DefaultSelection<Prisma.$TimeOffBalancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TimeOffType: {
  VACATION: 'VACATION',
  SICK: 'SICK',
  PERSONAL: 'PERSONAL'
};

export type TimeOffType = (typeof TimeOffType)[keyof typeof TimeOffType]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TimeOffType = $Enums.TimeOffType

export const TimeOffType: typeof $Enums.TimeOffType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
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
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
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
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.timeOffRequest`: Exposes CRUD operations for the **TimeOffRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeOffRequests
    * const timeOffRequests = await prisma.timeOffRequest.findMany()
    * ```
    */
  get timeOffRequest(): Prisma.TimeOffRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestComment`: Exposes CRUD operations for the **RequestComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestComments
    * const requestComments = await prisma.requestComment.findMany()
    * ```
    */
  get requestComment(): Prisma.RequestCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeOffBalance`: Exposes CRUD operations for the **TimeOffBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeOffBalances
    * const timeOffBalances = await prisma.timeOffBalance.findMany()
    * ```
    */
  get timeOffBalance(): Prisma.TimeOffBalanceDelegate<ExtArgs, ClientOptions>;
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
    Test: 'Test',
    Department: 'Department',
    User: 'User',
    TimeOffRequest: 'TimeOffRequest',
    RequestComment: 'RequestComment',
    TimeOffBalance: 'TimeOffBalance'
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
      modelProps: "test" | "department" | "user" | "timeOffRequest" | "requestComment" | "timeOffBalance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
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
      TimeOffRequest: {
        payload: Prisma.$TimeOffRequestPayload<ExtArgs>
        fields: Prisma.TimeOffRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeOffRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeOffRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>
          }
          findFirst: {
            args: Prisma.TimeOffRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeOffRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>
          }
          findMany: {
            args: Prisma.TimeOffRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>[]
          }
          create: {
            args: Prisma.TimeOffRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>
          }
          createMany: {
            args: Prisma.TimeOffRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeOffRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>[]
          }
          delete: {
            args: Prisma.TimeOffRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>
          }
          update: {
            args: Prisma.TimeOffRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>
          }
          deleteMany: {
            args: Prisma.TimeOffRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeOffRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeOffRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>[]
          }
          upsert: {
            args: Prisma.TimeOffRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffRequestPayload>
          }
          aggregate: {
            args: Prisma.TimeOffRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeOffRequest>
          }
          groupBy: {
            args: Prisma.TimeOffRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeOffRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeOffRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TimeOffRequestCountAggregateOutputType> | number
          }
        }
      }
      RequestComment: {
        payload: Prisma.$RequestCommentPayload<ExtArgs>
        fields: Prisma.RequestCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>
          }
          findFirst: {
            args: Prisma.RequestCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>
          }
          findMany: {
            args: Prisma.RequestCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>[]
          }
          create: {
            args: Prisma.RequestCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>
          }
          createMany: {
            args: Prisma.RequestCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>[]
          }
          delete: {
            args: Prisma.RequestCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>
          }
          update: {
            args: Prisma.RequestCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>
          }
          deleteMany: {
            args: Prisma.RequestCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>[]
          }
          upsert: {
            args: Prisma.RequestCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestCommentPayload>
          }
          aggregate: {
            args: Prisma.RequestCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestComment>
          }
          groupBy: {
            args: Prisma.RequestCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCommentCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCommentCountAggregateOutputType> | number
          }
        }
      }
      TimeOffBalance: {
        payload: Prisma.$TimeOffBalancePayload<ExtArgs>
        fields: Prisma.TimeOffBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeOffBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeOffBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>
          }
          findFirst: {
            args: Prisma.TimeOffBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeOffBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>
          }
          findMany: {
            args: Prisma.TimeOffBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>[]
          }
          create: {
            args: Prisma.TimeOffBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>
          }
          createMany: {
            args: Prisma.TimeOffBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeOffBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>[]
          }
          delete: {
            args: Prisma.TimeOffBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>
          }
          update: {
            args: Prisma.TimeOffBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>
          }
          deleteMany: {
            args: Prisma.TimeOffBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeOffBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeOffBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>[]
          }
          upsert: {
            args: Prisma.TimeOffBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffBalancePayload>
          }
          aggregate: {
            args: Prisma.TimeOffBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeOffBalance>
          }
          groupBy: {
            args: Prisma.TimeOffBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeOffBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeOffBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<TimeOffBalanceCountAggregateOutputType> | number
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
    test?: TestOmit
    department?: DepartmentOmit
    user?: UserOmit
    timeOffRequest?: TimeOffRequestOmit
    requestComment?: RequestCommentOmit
    timeOffBalance?: TimeOffBalanceOmit
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
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employees: number
    timeOffRequests: number
    timeOffReviews: number
    timeOffBalances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | UserCountOutputTypeCountEmployeesArgs
    timeOffRequests?: boolean | UserCountOutputTypeCountTimeOffRequestsArgs
    timeOffReviews?: boolean | UserCountOutputTypeCountTimeOffReviewsArgs
    timeOffBalances?: boolean | UserCountOutputTypeCountTimeOffBalancesArgs
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
  export type UserCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeOffRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeOffReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeOffBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffBalanceWhereInput
  }


  /**
   * Count Type TimeOffRequestCountOutputType
   */

  export type TimeOffRequestCountOutputType = {
    comments: number
  }

  export type TimeOffRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TimeOffRequestCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * TimeOffRequestCountOutputType without action
   */
  export type TimeOffRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequestCountOutputType
     */
    select?: TimeOffRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeOffRequestCountOutputType without action
   */
  export type TimeOffRequestCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly name: FieldRef<"Test", 'String'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    departmentId: string | null
    managerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    departmentId: string | null
    managerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    departmentId: number
    managerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    departmentId?: true
    managerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    departmentId?: true
    managerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    departmentId?: true
    managerId?: true
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
    id: string
    email: string
    name: string
    role: $Enums.Role
    password: string
    createdAt: Date
    updatedAt: Date
    departmentId: string | null
    managerId: string | null
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
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    timeOffRequests?: boolean | User$timeOffRequestsArgs<ExtArgs>
    timeOffReviews?: boolean | User$timeOffReviewsArgs<ExtArgs>
    timeOffBalances?: boolean | User$timeOffBalancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentId?: boolean
    managerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "password" | "createdAt" | "updatedAt" | "departmentId" | "managerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    timeOffRequests?: boolean | User$timeOffRequestsArgs<ExtArgs>
    timeOffReviews?: boolean | User$timeOffReviewsArgs<ExtArgs>
    timeOffBalances?: boolean | User$timeOffBalancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      manager: Prisma.$UserPayload<ExtArgs> | null
      employees: Prisma.$UserPayload<ExtArgs>[]
      timeOffRequests: Prisma.$TimeOffRequestPayload<ExtArgs>[]
      timeOffReviews: Prisma.$TimeOffRequestPayload<ExtArgs>[]
      timeOffBalances: Prisma.$TimeOffBalancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      role: $Enums.Role
      password: string
      createdAt: Date
      updatedAt: Date
      departmentId: string | null
      managerId: string | null
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employees<T extends User$employeesArgs<ExtArgs> = {}>(args?: Subset<T, User$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeOffRequests<T extends User$timeOffRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$timeOffRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeOffReviews<T extends User$timeOffReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$timeOffReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeOffBalances<T extends User$timeOffBalancesArgs<ExtArgs> = {}>(args?: Subset<T, User$timeOffBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly departmentId: FieldRef<"User", 'String'>
    readonly managerId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.employees
   */
  export type User$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.timeOffRequests
   */
  export type User$timeOffRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    where?: TimeOffRequestWhereInput
    orderBy?: TimeOffRequestOrderByWithRelationInput | TimeOffRequestOrderByWithRelationInput[]
    cursor?: TimeOffRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeOffRequestScalarFieldEnum | TimeOffRequestScalarFieldEnum[]
  }

  /**
   * User.timeOffReviews
   */
  export type User$timeOffReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    where?: TimeOffRequestWhereInput
    orderBy?: TimeOffRequestOrderByWithRelationInput | TimeOffRequestOrderByWithRelationInput[]
    cursor?: TimeOffRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeOffRequestScalarFieldEnum | TimeOffRequestScalarFieldEnum[]
  }

  /**
   * User.timeOffBalances
   */
  export type User$timeOffBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    where?: TimeOffBalanceWhereInput
    orderBy?: TimeOffBalanceOrderByWithRelationInput | TimeOffBalanceOrderByWithRelationInput[]
    cursor?: TimeOffBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeOffBalanceScalarFieldEnum | TimeOffBalanceScalarFieldEnum[]
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
   * Model TimeOffRequest
   */

  export type AggregateTimeOffRequest = {
    _count: TimeOffRequestCountAggregateOutputType | null
    _avg: TimeOffRequestAvgAggregateOutputType | null
    _sum: TimeOffRequestSumAggregateOutputType | null
    _min: TimeOffRequestMinAggregateOutputType | null
    _max: TimeOffRequestMaxAggregateOutputType | null
  }

  export type TimeOffRequestAvgAggregateOutputType = {
    duration: number | null
  }

  export type TimeOffRequestSumAggregateOutputType = {
    duration: number | null
  }

  export type TimeOffRequestMinAggregateOutputType = {
    id: string | null
    type: $Enums.TimeOffType | null
    status: $Enums.RequestStatus | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    notes: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    reviewerId: string | null
  }

  export type TimeOffRequestMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TimeOffType | null
    status: $Enums.RequestStatus | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    notes: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    reviewerId: string | null
  }

  export type TimeOffRequestCountAggregateOutputType = {
    id: number
    type: number
    status: number
    startDate: number
    endDate: number
    duration: number
    notes: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    userId: number
    reviewerId: number
    _all: number
  }


  export type TimeOffRequestAvgAggregateInputType = {
    duration?: true
  }

  export type TimeOffRequestSumAggregateInputType = {
    duration?: true
  }

  export type TimeOffRequestMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    duration?: true
    notes?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    reviewerId?: true
  }

  export type TimeOffRequestMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    duration?: true
    notes?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    reviewerId?: true
  }

  export type TimeOffRequestCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    duration?: true
    notes?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    reviewerId?: true
    _all?: true
  }

  export type TimeOffRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeOffRequest to aggregate.
     */
    where?: TimeOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffRequests to fetch.
     */
    orderBy?: TimeOffRequestOrderByWithRelationInput | TimeOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeOffRequests
    **/
    _count?: true | TimeOffRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeOffRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeOffRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeOffRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeOffRequestMaxAggregateInputType
  }

  export type GetTimeOffRequestAggregateType<T extends TimeOffRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeOffRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeOffRequest[P]>
      : GetScalarType<T[P], AggregateTimeOffRequest[P]>
  }




  export type TimeOffRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffRequestWhereInput
    orderBy?: TimeOffRequestOrderByWithAggregationInput | TimeOffRequestOrderByWithAggregationInput[]
    by: TimeOffRequestScalarFieldEnum[] | TimeOffRequestScalarFieldEnum
    having?: TimeOffRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeOffRequestCountAggregateInputType | true
    _avg?: TimeOffRequestAvgAggregateInputType
    _sum?: TimeOffRequestSumAggregateInputType
    _min?: TimeOffRequestMinAggregateInputType
    _max?: TimeOffRequestMaxAggregateInputType
  }

  export type TimeOffRequestGroupByOutputType = {
    id: string
    type: $Enums.TimeOffType
    status: $Enums.RequestStatus
    startDate: Date
    endDate: Date
    duration: number
    notes: string | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    reviewerId: string | null
    _count: TimeOffRequestCountAggregateOutputType | null
    _avg: TimeOffRequestAvgAggregateOutputType | null
    _sum: TimeOffRequestSumAggregateOutputType | null
    _min: TimeOffRequestMinAggregateOutputType | null
    _max: TimeOffRequestMaxAggregateOutputType | null
  }

  type GetTimeOffRequestGroupByPayload<T extends TimeOffRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeOffRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeOffRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeOffRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TimeOffRequestGroupByOutputType[P]>
        }
      >
    >


  export type TimeOffRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    notes?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    reviewerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | TimeOffRequest$reviewerArgs<ExtArgs>
    comments?: boolean | TimeOffRequest$commentsArgs<ExtArgs>
    _count?: boolean | TimeOffRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOffRequest"]>

  export type TimeOffRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    notes?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    reviewerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | TimeOffRequest$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["timeOffRequest"]>

  export type TimeOffRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    notes?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    reviewerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | TimeOffRequest$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["timeOffRequest"]>

  export type TimeOffRequestSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    notes?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    reviewerId?: boolean
  }

  export type TimeOffRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "startDate" | "endDate" | "duration" | "notes" | "reviewedAt" | "createdAt" | "updatedAt" | "userId" | "reviewerId", ExtArgs["result"]["timeOffRequest"]>
  export type TimeOffRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | TimeOffRequest$reviewerArgs<ExtArgs>
    comments?: boolean | TimeOffRequest$commentsArgs<ExtArgs>
    _count?: boolean | TimeOffRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeOffRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | TimeOffRequest$reviewerArgs<ExtArgs>
  }
  export type TimeOffRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | TimeOffRequest$reviewerArgs<ExtArgs>
  }

  export type $TimeOffRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeOffRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      comments: Prisma.$RequestCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TimeOffType
      status: $Enums.RequestStatus
      startDate: Date
      endDate: Date
      duration: number
      notes: string | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
      reviewerId: string | null
    }, ExtArgs["result"]["timeOffRequest"]>
    composites: {}
  }

  type TimeOffRequestGetPayload<S extends boolean | null | undefined | TimeOffRequestDefaultArgs> = $Result.GetResult<Prisma.$TimeOffRequestPayload, S>

  type TimeOffRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeOffRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeOffRequestCountAggregateInputType | true
    }

  export interface TimeOffRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeOffRequest'], meta: { name: 'TimeOffRequest' } }
    /**
     * Find zero or one TimeOffRequest that matches the filter.
     * @param {TimeOffRequestFindUniqueArgs} args - Arguments to find a TimeOffRequest
     * @example
     * // Get one TimeOffRequest
     * const timeOffRequest = await prisma.timeOffRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeOffRequestFindUniqueArgs>(args: SelectSubset<T, TimeOffRequestFindUniqueArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeOffRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeOffRequestFindUniqueOrThrowArgs} args - Arguments to find a TimeOffRequest
     * @example
     * // Get one TimeOffRequest
     * const timeOffRequest = await prisma.timeOffRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeOffRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeOffRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeOffRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestFindFirstArgs} args - Arguments to find a TimeOffRequest
     * @example
     * // Get one TimeOffRequest
     * const timeOffRequest = await prisma.timeOffRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeOffRequestFindFirstArgs>(args?: SelectSubset<T, TimeOffRequestFindFirstArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeOffRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestFindFirstOrThrowArgs} args - Arguments to find a TimeOffRequest
     * @example
     * // Get one TimeOffRequest
     * const timeOffRequest = await prisma.timeOffRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeOffRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeOffRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeOffRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeOffRequests
     * const timeOffRequests = await prisma.timeOffRequest.findMany()
     * 
     * // Get first 10 TimeOffRequests
     * const timeOffRequests = await prisma.timeOffRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeOffRequestWithIdOnly = await prisma.timeOffRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeOffRequestFindManyArgs>(args?: SelectSubset<T, TimeOffRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeOffRequest.
     * @param {TimeOffRequestCreateArgs} args - Arguments to create a TimeOffRequest.
     * @example
     * // Create one TimeOffRequest
     * const TimeOffRequest = await prisma.timeOffRequest.create({
     *   data: {
     *     // ... data to create a TimeOffRequest
     *   }
     * })
     * 
     */
    create<T extends TimeOffRequestCreateArgs>(args: SelectSubset<T, TimeOffRequestCreateArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeOffRequests.
     * @param {TimeOffRequestCreateManyArgs} args - Arguments to create many TimeOffRequests.
     * @example
     * // Create many TimeOffRequests
     * const timeOffRequest = await prisma.timeOffRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeOffRequestCreateManyArgs>(args?: SelectSubset<T, TimeOffRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeOffRequests and returns the data saved in the database.
     * @param {TimeOffRequestCreateManyAndReturnArgs} args - Arguments to create many TimeOffRequests.
     * @example
     * // Create many TimeOffRequests
     * const timeOffRequest = await prisma.timeOffRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeOffRequests and only return the `id`
     * const timeOffRequestWithIdOnly = await prisma.timeOffRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeOffRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeOffRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeOffRequest.
     * @param {TimeOffRequestDeleteArgs} args - Arguments to delete one TimeOffRequest.
     * @example
     * // Delete one TimeOffRequest
     * const TimeOffRequest = await prisma.timeOffRequest.delete({
     *   where: {
     *     // ... filter to delete one TimeOffRequest
     *   }
     * })
     * 
     */
    delete<T extends TimeOffRequestDeleteArgs>(args: SelectSubset<T, TimeOffRequestDeleteArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeOffRequest.
     * @param {TimeOffRequestUpdateArgs} args - Arguments to update one TimeOffRequest.
     * @example
     * // Update one TimeOffRequest
     * const timeOffRequest = await prisma.timeOffRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeOffRequestUpdateArgs>(args: SelectSubset<T, TimeOffRequestUpdateArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeOffRequests.
     * @param {TimeOffRequestDeleteManyArgs} args - Arguments to filter TimeOffRequests to delete.
     * @example
     * // Delete a few TimeOffRequests
     * const { count } = await prisma.timeOffRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeOffRequestDeleteManyArgs>(args?: SelectSubset<T, TimeOffRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeOffRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeOffRequests
     * const timeOffRequest = await prisma.timeOffRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeOffRequestUpdateManyArgs>(args: SelectSubset<T, TimeOffRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeOffRequests and returns the data updated in the database.
     * @param {TimeOffRequestUpdateManyAndReturnArgs} args - Arguments to update many TimeOffRequests.
     * @example
     * // Update many TimeOffRequests
     * const timeOffRequest = await prisma.timeOffRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeOffRequests and only return the `id`
     * const timeOffRequestWithIdOnly = await prisma.timeOffRequest.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TimeOffRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeOffRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeOffRequest.
     * @param {TimeOffRequestUpsertArgs} args - Arguments to update or create a TimeOffRequest.
     * @example
     * // Update or create a TimeOffRequest
     * const timeOffRequest = await prisma.timeOffRequest.upsert({
     *   create: {
     *     // ... data to create a TimeOffRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeOffRequest we want to update
     *   }
     * })
     */
    upsert<T extends TimeOffRequestUpsertArgs>(args: SelectSubset<T, TimeOffRequestUpsertArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeOffRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestCountArgs} args - Arguments to filter TimeOffRequests to count.
     * @example
     * // Count the number of TimeOffRequests
     * const count = await prisma.timeOffRequest.count({
     *   where: {
     *     // ... the filter for the TimeOffRequests we want to count
     *   }
     * })
    **/
    count<T extends TimeOffRequestCountArgs>(
      args?: Subset<T, TimeOffRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeOffRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeOffRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeOffRequestAggregateArgs>(args: Subset<T, TimeOffRequestAggregateArgs>): Prisma.PrismaPromise<GetTimeOffRequestAggregateType<T>>

    /**
     * Group by TimeOffRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffRequestGroupByArgs} args - Group by arguments.
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
      T extends TimeOffRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeOffRequestGroupByArgs['orderBy'] }
        : { orderBy?: TimeOffRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeOffRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeOffRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeOffRequest model
   */
  readonly fields: TimeOffRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeOffRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeOffRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends TimeOffRequest$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, TimeOffRequest$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends TimeOffRequest$commentsArgs<ExtArgs> = {}>(args?: Subset<T, TimeOffRequest$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TimeOffRequest model
   */
  interface TimeOffRequestFieldRefs {
    readonly id: FieldRef<"TimeOffRequest", 'String'>
    readonly type: FieldRef<"TimeOffRequest", 'TimeOffType'>
    readonly status: FieldRef<"TimeOffRequest", 'RequestStatus'>
    readonly startDate: FieldRef<"TimeOffRequest", 'DateTime'>
    readonly endDate: FieldRef<"TimeOffRequest", 'DateTime'>
    readonly duration: FieldRef<"TimeOffRequest", 'Float'>
    readonly notes: FieldRef<"TimeOffRequest", 'String'>
    readonly reviewedAt: FieldRef<"TimeOffRequest", 'DateTime'>
    readonly createdAt: FieldRef<"TimeOffRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeOffRequest", 'DateTime'>
    readonly userId: FieldRef<"TimeOffRequest", 'String'>
    readonly reviewerId: FieldRef<"TimeOffRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeOffRequest findUnique
   */
  export type TimeOffRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffRequest to fetch.
     */
    where: TimeOffRequestWhereUniqueInput
  }

  /**
   * TimeOffRequest findUniqueOrThrow
   */
  export type TimeOffRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffRequest to fetch.
     */
    where: TimeOffRequestWhereUniqueInput
  }

  /**
   * TimeOffRequest findFirst
   */
  export type TimeOffRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffRequest to fetch.
     */
    where?: TimeOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffRequests to fetch.
     */
    orderBy?: TimeOffRequestOrderByWithRelationInput | TimeOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeOffRequests.
     */
    cursor?: TimeOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeOffRequests.
     */
    distinct?: TimeOffRequestScalarFieldEnum | TimeOffRequestScalarFieldEnum[]
  }

  /**
   * TimeOffRequest findFirstOrThrow
   */
  export type TimeOffRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffRequest to fetch.
     */
    where?: TimeOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffRequests to fetch.
     */
    orderBy?: TimeOffRequestOrderByWithRelationInput | TimeOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeOffRequests.
     */
    cursor?: TimeOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeOffRequests.
     */
    distinct?: TimeOffRequestScalarFieldEnum | TimeOffRequestScalarFieldEnum[]
  }

  /**
   * TimeOffRequest findMany
   */
  export type TimeOffRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffRequests to fetch.
     */
    where?: TimeOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffRequests to fetch.
     */
    orderBy?: TimeOffRequestOrderByWithRelationInput | TimeOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeOffRequests.
     */
    cursor?: TimeOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffRequests.
     */
    skip?: number
    distinct?: TimeOffRequestScalarFieldEnum | TimeOffRequestScalarFieldEnum[]
  }

  /**
   * TimeOffRequest create
   */
  export type TimeOffRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeOffRequest.
     */
    data: XOR<TimeOffRequestCreateInput, TimeOffRequestUncheckedCreateInput>
  }

  /**
   * TimeOffRequest createMany
   */
  export type TimeOffRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeOffRequests.
     */
    data: TimeOffRequestCreateManyInput | TimeOffRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeOffRequest createManyAndReturn
   */
  export type TimeOffRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * The data used to create many TimeOffRequests.
     */
    data: TimeOffRequestCreateManyInput | TimeOffRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeOffRequest update
   */
  export type TimeOffRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeOffRequest.
     */
    data: XOR<TimeOffRequestUpdateInput, TimeOffRequestUncheckedUpdateInput>
    /**
     * Choose, which TimeOffRequest to update.
     */
    where: TimeOffRequestWhereUniqueInput
  }

  /**
   * TimeOffRequest updateMany
   */
  export type TimeOffRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeOffRequests.
     */
    data: XOR<TimeOffRequestUpdateManyMutationInput, TimeOffRequestUncheckedUpdateManyInput>
    /**
     * Filter which TimeOffRequests to update
     */
    where?: TimeOffRequestWhereInput
    /**
     * Limit how many TimeOffRequests to update.
     */
    limit?: number
  }

  /**
   * TimeOffRequest updateManyAndReturn
   */
  export type TimeOffRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * The data used to update TimeOffRequests.
     */
    data: XOR<TimeOffRequestUpdateManyMutationInput, TimeOffRequestUncheckedUpdateManyInput>
    /**
     * Filter which TimeOffRequests to update
     */
    where?: TimeOffRequestWhereInput
    /**
     * Limit how many TimeOffRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeOffRequest upsert
   */
  export type TimeOffRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeOffRequest to update in case it exists.
     */
    where: TimeOffRequestWhereUniqueInput
    /**
     * In case the TimeOffRequest found by the `where` argument doesn't exist, create a new TimeOffRequest with this data.
     */
    create: XOR<TimeOffRequestCreateInput, TimeOffRequestUncheckedCreateInput>
    /**
     * In case the TimeOffRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeOffRequestUpdateInput, TimeOffRequestUncheckedUpdateInput>
  }

  /**
   * TimeOffRequest delete
   */
  export type TimeOffRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
    /**
     * Filter which TimeOffRequest to delete.
     */
    where: TimeOffRequestWhereUniqueInput
  }

  /**
   * TimeOffRequest deleteMany
   */
  export type TimeOffRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeOffRequests to delete
     */
    where?: TimeOffRequestWhereInput
    /**
     * Limit how many TimeOffRequests to delete.
     */
    limit?: number
  }

  /**
   * TimeOffRequest.reviewer
   */
  export type TimeOffRequest$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * TimeOffRequest.comments
   */
  export type TimeOffRequest$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    where?: RequestCommentWhereInput
    orderBy?: RequestCommentOrderByWithRelationInput | RequestCommentOrderByWithRelationInput[]
    cursor?: RequestCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestCommentScalarFieldEnum | RequestCommentScalarFieldEnum[]
  }

  /**
   * TimeOffRequest without action
   */
  export type TimeOffRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffRequest
     */
    select?: TimeOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffRequest
     */
    omit?: TimeOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffRequestInclude<ExtArgs> | null
  }


  /**
   * Model RequestComment
   */

  export type AggregateRequestComment = {
    _count: RequestCommentCountAggregateOutputType | null
    _min: RequestCommentMinAggregateOutputType | null
    _max: RequestCommentMaxAggregateOutputType | null
  }

  export type RequestCommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
  }

  export type RequestCommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestId: string | null
  }

  export type RequestCommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    requestId: number
    _all: number
  }


  export type RequestCommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
  }

  export type RequestCommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
  }

  export type RequestCommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    requestId?: true
    _all?: true
  }

  export type RequestCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestComment to aggregate.
     */
    where?: RequestCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComments to fetch.
     */
    orderBy?: RequestCommentOrderByWithRelationInput | RequestCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestComments
    **/
    _count?: true | RequestCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestCommentMaxAggregateInputType
  }

  export type GetRequestCommentAggregateType<T extends RequestCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestComment[P]>
      : GetScalarType<T[P], AggregateRequestComment[P]>
  }




  export type RequestCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestCommentWhereInput
    orderBy?: RequestCommentOrderByWithAggregationInput | RequestCommentOrderByWithAggregationInput[]
    by: RequestCommentScalarFieldEnum[] | RequestCommentScalarFieldEnum
    having?: RequestCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCommentCountAggregateInputType | true
    _min?: RequestCommentMinAggregateInputType
    _max?: RequestCommentMaxAggregateInputType
  }

  export type RequestCommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    requestId: string
    _count: RequestCommentCountAggregateOutputType | null
    _min: RequestCommentMinAggregateOutputType | null
    _max: RequestCommentMaxAggregateOutputType | null
  }

  type GetRequestCommentGroupByPayload<T extends RequestCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestCommentGroupByOutputType[P]>
            : GetScalarType<T[P], RequestCommentGroupByOutputType[P]>
        }
      >
    >


  export type RequestCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    timeOffRequest?: boolean | TimeOffRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestComment"]>

  export type RequestCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    timeOffRequest?: boolean | TimeOffRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestComment"]>

  export type RequestCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
    timeOffRequest?: boolean | TimeOffRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestComment"]>

  export type RequestCommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestId?: boolean
  }

  export type RequestCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "requestId", ExtArgs["result"]["requestComment"]>
  export type RequestCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeOffRequest?: boolean | TimeOffRequestDefaultArgs<ExtArgs>
  }
  export type RequestCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeOffRequest?: boolean | TimeOffRequestDefaultArgs<ExtArgs>
  }
  export type RequestCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeOffRequest?: boolean | TimeOffRequestDefaultArgs<ExtArgs>
  }

  export type $RequestCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestComment"
    objects: {
      timeOffRequest: Prisma.$TimeOffRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      requestId: string
    }, ExtArgs["result"]["requestComment"]>
    composites: {}
  }

  type RequestCommentGetPayload<S extends boolean | null | undefined | RequestCommentDefaultArgs> = $Result.GetResult<Prisma.$RequestCommentPayload, S>

  type RequestCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCommentCountAggregateInputType | true
    }

  export interface RequestCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestComment'], meta: { name: 'RequestComment' } }
    /**
     * Find zero or one RequestComment that matches the filter.
     * @param {RequestCommentFindUniqueArgs} args - Arguments to find a RequestComment
     * @example
     * // Get one RequestComment
     * const requestComment = await prisma.requestComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestCommentFindUniqueArgs>(args: SelectSubset<T, RequestCommentFindUniqueArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestCommentFindUniqueOrThrowArgs} args - Arguments to find a RequestComment
     * @example
     * // Get one RequestComment
     * const requestComment = await prisma.requestComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentFindFirstArgs} args - Arguments to find a RequestComment
     * @example
     * // Get one RequestComment
     * const requestComment = await prisma.requestComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestCommentFindFirstArgs>(args?: SelectSubset<T, RequestCommentFindFirstArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentFindFirstOrThrowArgs} args - Arguments to find a RequestComment
     * @example
     * // Get one RequestComment
     * const requestComment = await prisma.requestComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestComments
     * const requestComments = await prisma.requestComment.findMany()
     * 
     * // Get first 10 RequestComments
     * const requestComments = await prisma.requestComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestCommentWithIdOnly = await prisma.requestComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestCommentFindManyArgs>(args?: SelectSubset<T, RequestCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestComment.
     * @param {RequestCommentCreateArgs} args - Arguments to create a RequestComment.
     * @example
     * // Create one RequestComment
     * const RequestComment = await prisma.requestComment.create({
     *   data: {
     *     // ... data to create a RequestComment
     *   }
     * })
     * 
     */
    create<T extends RequestCommentCreateArgs>(args: SelectSubset<T, RequestCommentCreateArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestComments.
     * @param {RequestCommentCreateManyArgs} args - Arguments to create many RequestComments.
     * @example
     * // Create many RequestComments
     * const requestComment = await prisma.requestComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCommentCreateManyArgs>(args?: SelectSubset<T, RequestCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestComments and returns the data saved in the database.
     * @param {RequestCommentCreateManyAndReturnArgs} args - Arguments to create many RequestComments.
     * @example
     * // Create many RequestComments
     * const requestComment = await prisma.requestComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestComments and only return the `id`
     * const requestCommentWithIdOnly = await prisma.requestComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestComment.
     * @param {RequestCommentDeleteArgs} args - Arguments to delete one RequestComment.
     * @example
     * // Delete one RequestComment
     * const RequestComment = await prisma.requestComment.delete({
     *   where: {
     *     // ... filter to delete one RequestComment
     *   }
     * })
     * 
     */
    delete<T extends RequestCommentDeleteArgs>(args: SelectSubset<T, RequestCommentDeleteArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestComment.
     * @param {RequestCommentUpdateArgs} args - Arguments to update one RequestComment.
     * @example
     * // Update one RequestComment
     * const requestComment = await prisma.requestComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestCommentUpdateArgs>(args: SelectSubset<T, RequestCommentUpdateArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestComments.
     * @param {RequestCommentDeleteManyArgs} args - Arguments to filter RequestComments to delete.
     * @example
     * // Delete a few RequestComments
     * const { count } = await prisma.requestComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestCommentDeleteManyArgs>(args?: SelectSubset<T, RequestCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestComments
     * const requestComment = await prisma.requestComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestCommentUpdateManyArgs>(args: SelectSubset<T, RequestCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestComments and returns the data updated in the database.
     * @param {RequestCommentUpdateManyAndReturnArgs} args - Arguments to update many RequestComments.
     * @example
     * // Update many RequestComments
     * const requestComment = await prisma.requestComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestComments and only return the `id`
     * const requestCommentWithIdOnly = await prisma.requestComment.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends RequestCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestComment.
     * @param {RequestCommentUpsertArgs} args - Arguments to update or create a RequestComment.
     * @example
     * // Update or create a RequestComment
     * const requestComment = await prisma.requestComment.upsert({
     *   create: {
     *     // ... data to create a RequestComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestComment we want to update
     *   }
     * })
     */
    upsert<T extends RequestCommentUpsertArgs>(args: SelectSubset<T, RequestCommentUpsertArgs<ExtArgs>>): Prisma__RequestCommentClient<$Result.GetResult<Prisma.$RequestCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentCountArgs} args - Arguments to filter RequestComments to count.
     * @example
     * // Count the number of RequestComments
     * const count = await prisma.requestComment.count({
     *   where: {
     *     // ... the filter for the RequestComments we want to count
     *   }
     * })
    **/
    count<T extends RequestCommentCountArgs>(
      args?: Subset<T, RequestCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestCommentAggregateArgs>(args: Subset<T, RequestCommentAggregateArgs>): Prisma.PrismaPromise<GetRequestCommentAggregateType<T>>

    /**
     * Group by RequestComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCommentGroupByArgs} args - Group by arguments.
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
      T extends RequestCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestCommentGroupByArgs['orderBy'] }
        : { orderBy?: RequestCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestComment model
   */
  readonly fields: RequestCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeOffRequest<T extends TimeOffRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeOffRequestDefaultArgs<ExtArgs>>): Prisma__TimeOffRequestClient<$Result.GetResult<Prisma.$TimeOffRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestComment model
   */
  interface RequestCommentFieldRefs {
    readonly id: FieldRef<"RequestComment", 'String'>
    readonly content: FieldRef<"RequestComment", 'String'>
    readonly createdAt: FieldRef<"RequestComment", 'DateTime'>
    readonly updatedAt: FieldRef<"RequestComment", 'DateTime'>
    readonly requestId: FieldRef<"RequestComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RequestComment findUnique
   */
  export type RequestCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * Filter, which RequestComment to fetch.
     */
    where: RequestCommentWhereUniqueInput
  }

  /**
   * RequestComment findUniqueOrThrow
   */
  export type RequestCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * Filter, which RequestComment to fetch.
     */
    where: RequestCommentWhereUniqueInput
  }

  /**
   * RequestComment findFirst
   */
  export type RequestCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * Filter, which RequestComment to fetch.
     */
    where?: RequestCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComments to fetch.
     */
    orderBy?: RequestCommentOrderByWithRelationInput | RequestCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestComments.
     */
    cursor?: RequestCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestComments.
     */
    distinct?: RequestCommentScalarFieldEnum | RequestCommentScalarFieldEnum[]
  }

  /**
   * RequestComment findFirstOrThrow
   */
  export type RequestCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * Filter, which RequestComment to fetch.
     */
    where?: RequestCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComments to fetch.
     */
    orderBy?: RequestCommentOrderByWithRelationInput | RequestCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestComments.
     */
    cursor?: RequestCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestComments.
     */
    distinct?: RequestCommentScalarFieldEnum | RequestCommentScalarFieldEnum[]
  }

  /**
   * RequestComment findMany
   */
  export type RequestCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * Filter, which RequestComments to fetch.
     */
    where?: RequestCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestComments to fetch.
     */
    orderBy?: RequestCommentOrderByWithRelationInput | RequestCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestComments.
     */
    cursor?: RequestCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestComments.
     */
    skip?: number
    distinct?: RequestCommentScalarFieldEnum | RequestCommentScalarFieldEnum[]
  }

  /**
   * RequestComment create
   */
  export type RequestCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestComment.
     */
    data: XOR<RequestCommentCreateInput, RequestCommentUncheckedCreateInput>
  }

  /**
   * RequestComment createMany
   */
  export type RequestCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestComments.
     */
    data: RequestCommentCreateManyInput | RequestCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestComment createManyAndReturn
   */
  export type RequestCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * The data used to create many RequestComments.
     */
    data: RequestCommentCreateManyInput | RequestCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestComment update
   */
  export type RequestCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestComment.
     */
    data: XOR<RequestCommentUpdateInput, RequestCommentUncheckedUpdateInput>
    /**
     * Choose, which RequestComment to update.
     */
    where: RequestCommentWhereUniqueInput
  }

  /**
   * RequestComment updateMany
   */
  export type RequestCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestComments.
     */
    data: XOR<RequestCommentUpdateManyMutationInput, RequestCommentUncheckedUpdateManyInput>
    /**
     * Filter which RequestComments to update
     */
    where?: RequestCommentWhereInput
    /**
     * Limit how many RequestComments to update.
     */
    limit?: number
  }

  /**
   * RequestComment updateManyAndReturn
   */
  export type RequestCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * The data used to update RequestComments.
     */
    data: XOR<RequestCommentUpdateManyMutationInput, RequestCommentUncheckedUpdateManyInput>
    /**
     * Filter which RequestComments to update
     */
    where?: RequestCommentWhereInput
    /**
     * Limit how many RequestComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestComment upsert
   */
  export type RequestCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestComment to update in case it exists.
     */
    where: RequestCommentWhereUniqueInput
    /**
     * In case the RequestComment found by the `where` argument doesn't exist, create a new RequestComment with this data.
     */
    create: XOR<RequestCommentCreateInput, RequestCommentUncheckedCreateInput>
    /**
     * In case the RequestComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestCommentUpdateInput, RequestCommentUncheckedUpdateInput>
  }

  /**
   * RequestComment delete
   */
  export type RequestCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
    /**
     * Filter which RequestComment to delete.
     */
    where: RequestCommentWhereUniqueInput
  }

  /**
   * RequestComment deleteMany
   */
  export type RequestCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestComments to delete
     */
    where?: RequestCommentWhereInput
    /**
     * Limit how many RequestComments to delete.
     */
    limit?: number
  }

  /**
   * RequestComment without action
   */
  export type RequestCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestComment
     */
    select?: RequestCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestComment
     */
    omit?: RequestCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestCommentInclude<ExtArgs> | null
  }


  /**
   * Model TimeOffBalance
   */

  export type AggregateTimeOffBalance = {
    _count: TimeOffBalanceCountAggregateOutputType | null
    _avg: TimeOffBalanceAvgAggregateOutputType | null
    _sum: TimeOffBalanceSumAggregateOutputType | null
    _min: TimeOffBalanceMinAggregateOutputType | null
    _max: TimeOffBalanceMaxAggregateOutputType | null
  }

  export type TimeOffBalanceAvgAggregateOutputType = {
    year: number | null
    initialDays: number | null
    usedDays: number | null
    adjustmentDays: number | null
  }

  export type TimeOffBalanceSumAggregateOutputType = {
    year: number | null
    initialDays: number | null
    usedDays: number | null
    adjustmentDays: number | null
  }

  export type TimeOffBalanceMinAggregateOutputType = {
    id: string | null
    year: number | null
    type: $Enums.TimeOffType | null
    initialDays: number | null
    usedDays: number | null
    adjustmentDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TimeOffBalanceMaxAggregateOutputType = {
    id: string | null
    year: number | null
    type: $Enums.TimeOffType | null
    initialDays: number | null
    usedDays: number | null
    adjustmentDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TimeOffBalanceCountAggregateOutputType = {
    id: number
    year: number
    type: number
    initialDays: number
    usedDays: number
    adjustmentDays: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TimeOffBalanceAvgAggregateInputType = {
    year?: true
    initialDays?: true
    usedDays?: true
    adjustmentDays?: true
  }

  export type TimeOffBalanceSumAggregateInputType = {
    year?: true
    initialDays?: true
    usedDays?: true
    adjustmentDays?: true
  }

  export type TimeOffBalanceMinAggregateInputType = {
    id?: true
    year?: true
    type?: true
    initialDays?: true
    usedDays?: true
    adjustmentDays?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TimeOffBalanceMaxAggregateInputType = {
    id?: true
    year?: true
    type?: true
    initialDays?: true
    usedDays?: true
    adjustmentDays?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TimeOffBalanceCountAggregateInputType = {
    id?: true
    year?: true
    type?: true
    initialDays?: true
    usedDays?: true
    adjustmentDays?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TimeOffBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeOffBalance to aggregate.
     */
    where?: TimeOffBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffBalances to fetch.
     */
    orderBy?: TimeOffBalanceOrderByWithRelationInput | TimeOffBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeOffBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeOffBalances
    **/
    _count?: true | TimeOffBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeOffBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeOffBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeOffBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeOffBalanceMaxAggregateInputType
  }

  export type GetTimeOffBalanceAggregateType<T extends TimeOffBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeOffBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeOffBalance[P]>
      : GetScalarType<T[P], AggregateTimeOffBalance[P]>
  }




  export type TimeOffBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffBalanceWhereInput
    orderBy?: TimeOffBalanceOrderByWithAggregationInput | TimeOffBalanceOrderByWithAggregationInput[]
    by: TimeOffBalanceScalarFieldEnum[] | TimeOffBalanceScalarFieldEnum
    having?: TimeOffBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeOffBalanceCountAggregateInputType | true
    _avg?: TimeOffBalanceAvgAggregateInputType
    _sum?: TimeOffBalanceSumAggregateInputType
    _min?: TimeOffBalanceMinAggregateInputType
    _max?: TimeOffBalanceMaxAggregateInputType
  }

  export type TimeOffBalanceGroupByOutputType = {
    id: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays: number
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: TimeOffBalanceCountAggregateOutputType | null
    _avg: TimeOffBalanceAvgAggregateOutputType | null
    _sum: TimeOffBalanceSumAggregateOutputType | null
    _min: TimeOffBalanceMinAggregateOutputType | null
    _max: TimeOffBalanceMaxAggregateOutputType | null
  }

  type GetTimeOffBalanceGroupByPayload<T extends TimeOffBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeOffBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeOffBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeOffBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], TimeOffBalanceGroupByOutputType[P]>
        }
      >
    >


  export type TimeOffBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    type?: boolean
    initialDays?: boolean
    usedDays?: boolean
    adjustmentDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOffBalance"]>

  export type TimeOffBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    type?: boolean
    initialDays?: boolean
    usedDays?: boolean
    adjustmentDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOffBalance"]>

  export type TimeOffBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    type?: boolean
    initialDays?: boolean
    usedDays?: boolean
    adjustmentDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOffBalance"]>

  export type TimeOffBalanceSelectScalar = {
    id?: boolean
    year?: boolean
    type?: boolean
    initialDays?: boolean
    usedDays?: boolean
    adjustmentDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TimeOffBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "type" | "initialDays" | "usedDays" | "adjustmentDays" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["timeOffBalance"]>
  export type TimeOffBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeOffBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeOffBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimeOffBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeOffBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      type: $Enums.TimeOffType
      initialDays: number
      usedDays: number
      adjustmentDays: number
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["timeOffBalance"]>
    composites: {}
  }

  type TimeOffBalanceGetPayload<S extends boolean | null | undefined | TimeOffBalanceDefaultArgs> = $Result.GetResult<Prisma.$TimeOffBalancePayload, S>

  type TimeOffBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeOffBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeOffBalanceCountAggregateInputType | true
    }

  export interface TimeOffBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeOffBalance'], meta: { name: 'TimeOffBalance' } }
    /**
     * Find zero or one TimeOffBalance that matches the filter.
     * @param {TimeOffBalanceFindUniqueArgs} args - Arguments to find a TimeOffBalance
     * @example
     * // Get one TimeOffBalance
     * const timeOffBalance = await prisma.timeOffBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeOffBalanceFindUniqueArgs>(args: SelectSubset<T, TimeOffBalanceFindUniqueArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeOffBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeOffBalanceFindUniqueOrThrowArgs} args - Arguments to find a TimeOffBalance
     * @example
     * // Get one TimeOffBalance
     * const timeOffBalance = await prisma.timeOffBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeOffBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeOffBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeOffBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceFindFirstArgs} args - Arguments to find a TimeOffBalance
     * @example
     * // Get one TimeOffBalance
     * const timeOffBalance = await prisma.timeOffBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeOffBalanceFindFirstArgs>(args?: SelectSubset<T, TimeOffBalanceFindFirstArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeOffBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceFindFirstOrThrowArgs} args - Arguments to find a TimeOffBalance
     * @example
     * // Get one TimeOffBalance
     * const timeOffBalance = await prisma.timeOffBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeOffBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeOffBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeOffBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeOffBalances
     * const timeOffBalances = await prisma.timeOffBalance.findMany()
     * 
     * // Get first 10 TimeOffBalances
     * const timeOffBalances = await prisma.timeOffBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeOffBalanceWithIdOnly = await prisma.timeOffBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeOffBalanceFindManyArgs>(args?: SelectSubset<T, TimeOffBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeOffBalance.
     * @param {TimeOffBalanceCreateArgs} args - Arguments to create a TimeOffBalance.
     * @example
     * // Create one TimeOffBalance
     * const TimeOffBalance = await prisma.timeOffBalance.create({
     *   data: {
     *     // ... data to create a TimeOffBalance
     *   }
     * })
     * 
     */
    create<T extends TimeOffBalanceCreateArgs>(args: SelectSubset<T, TimeOffBalanceCreateArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeOffBalances.
     * @param {TimeOffBalanceCreateManyArgs} args - Arguments to create many TimeOffBalances.
     * @example
     * // Create many TimeOffBalances
     * const timeOffBalance = await prisma.timeOffBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeOffBalanceCreateManyArgs>(args?: SelectSubset<T, TimeOffBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeOffBalances and returns the data saved in the database.
     * @param {TimeOffBalanceCreateManyAndReturnArgs} args - Arguments to create many TimeOffBalances.
     * @example
     * // Create many TimeOffBalances
     * const timeOffBalance = await prisma.timeOffBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeOffBalances and only return the `id`
     * const timeOffBalanceWithIdOnly = await prisma.timeOffBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeOffBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeOffBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeOffBalance.
     * @param {TimeOffBalanceDeleteArgs} args - Arguments to delete one TimeOffBalance.
     * @example
     * // Delete one TimeOffBalance
     * const TimeOffBalance = await prisma.timeOffBalance.delete({
     *   where: {
     *     // ... filter to delete one TimeOffBalance
     *   }
     * })
     * 
     */
    delete<T extends TimeOffBalanceDeleteArgs>(args: SelectSubset<T, TimeOffBalanceDeleteArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeOffBalance.
     * @param {TimeOffBalanceUpdateArgs} args - Arguments to update one TimeOffBalance.
     * @example
     * // Update one TimeOffBalance
     * const timeOffBalance = await prisma.timeOffBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeOffBalanceUpdateArgs>(args: SelectSubset<T, TimeOffBalanceUpdateArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeOffBalances.
     * @param {TimeOffBalanceDeleteManyArgs} args - Arguments to filter TimeOffBalances to delete.
     * @example
     * // Delete a few TimeOffBalances
     * const { count } = await prisma.timeOffBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeOffBalanceDeleteManyArgs>(args?: SelectSubset<T, TimeOffBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeOffBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeOffBalances
     * const timeOffBalance = await prisma.timeOffBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeOffBalanceUpdateManyArgs>(args: SelectSubset<T, TimeOffBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeOffBalances and returns the data updated in the database.
     * @param {TimeOffBalanceUpdateManyAndReturnArgs} args - Arguments to update many TimeOffBalances.
     * @example
     * // Update many TimeOffBalances
     * const timeOffBalance = await prisma.timeOffBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeOffBalances and only return the `id`
     * const timeOffBalanceWithIdOnly = await prisma.timeOffBalance.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TimeOffBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeOffBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeOffBalance.
     * @param {TimeOffBalanceUpsertArgs} args - Arguments to update or create a TimeOffBalance.
     * @example
     * // Update or create a TimeOffBalance
     * const timeOffBalance = await prisma.timeOffBalance.upsert({
     *   create: {
     *     // ... data to create a TimeOffBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeOffBalance we want to update
     *   }
     * })
     */
    upsert<T extends TimeOffBalanceUpsertArgs>(args: SelectSubset<T, TimeOffBalanceUpsertArgs<ExtArgs>>): Prisma__TimeOffBalanceClient<$Result.GetResult<Prisma.$TimeOffBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeOffBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceCountArgs} args - Arguments to filter TimeOffBalances to count.
     * @example
     * // Count the number of TimeOffBalances
     * const count = await prisma.timeOffBalance.count({
     *   where: {
     *     // ... the filter for the TimeOffBalances we want to count
     *   }
     * })
    **/
    count<T extends TimeOffBalanceCountArgs>(
      args?: Subset<T, TimeOffBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeOffBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeOffBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeOffBalanceAggregateArgs>(args: Subset<T, TimeOffBalanceAggregateArgs>): Prisma.PrismaPromise<GetTimeOffBalanceAggregateType<T>>

    /**
     * Group by TimeOffBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffBalanceGroupByArgs} args - Group by arguments.
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
      T extends TimeOffBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeOffBalanceGroupByArgs['orderBy'] }
        : { orderBy?: TimeOffBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeOffBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeOffBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeOffBalance model
   */
  readonly fields: TimeOffBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeOffBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeOffBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimeOffBalance model
   */
  interface TimeOffBalanceFieldRefs {
    readonly id: FieldRef<"TimeOffBalance", 'String'>
    readonly year: FieldRef<"TimeOffBalance", 'Int'>
    readonly type: FieldRef<"TimeOffBalance", 'TimeOffType'>
    readonly initialDays: FieldRef<"TimeOffBalance", 'Float'>
    readonly usedDays: FieldRef<"TimeOffBalance", 'Float'>
    readonly adjustmentDays: FieldRef<"TimeOffBalance", 'Float'>
    readonly createdAt: FieldRef<"TimeOffBalance", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeOffBalance", 'DateTime'>
    readonly userId: FieldRef<"TimeOffBalance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeOffBalance findUnique
   */
  export type TimeOffBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffBalance to fetch.
     */
    where: TimeOffBalanceWhereUniqueInput
  }

  /**
   * TimeOffBalance findUniqueOrThrow
   */
  export type TimeOffBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffBalance to fetch.
     */
    where: TimeOffBalanceWhereUniqueInput
  }

  /**
   * TimeOffBalance findFirst
   */
  export type TimeOffBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffBalance to fetch.
     */
    where?: TimeOffBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffBalances to fetch.
     */
    orderBy?: TimeOffBalanceOrderByWithRelationInput | TimeOffBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeOffBalances.
     */
    cursor?: TimeOffBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeOffBalances.
     */
    distinct?: TimeOffBalanceScalarFieldEnum | TimeOffBalanceScalarFieldEnum[]
  }

  /**
   * TimeOffBalance findFirstOrThrow
   */
  export type TimeOffBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffBalance to fetch.
     */
    where?: TimeOffBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffBalances to fetch.
     */
    orderBy?: TimeOffBalanceOrderByWithRelationInput | TimeOffBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeOffBalances.
     */
    cursor?: TimeOffBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeOffBalances.
     */
    distinct?: TimeOffBalanceScalarFieldEnum | TimeOffBalanceScalarFieldEnum[]
  }

  /**
   * TimeOffBalance findMany
   */
  export type TimeOffBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffBalances to fetch.
     */
    where?: TimeOffBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffBalances to fetch.
     */
    orderBy?: TimeOffBalanceOrderByWithRelationInput | TimeOffBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeOffBalances.
     */
    cursor?: TimeOffBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffBalances.
     */
    skip?: number
    distinct?: TimeOffBalanceScalarFieldEnum | TimeOffBalanceScalarFieldEnum[]
  }

  /**
   * TimeOffBalance create
   */
  export type TimeOffBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeOffBalance.
     */
    data: XOR<TimeOffBalanceCreateInput, TimeOffBalanceUncheckedCreateInput>
  }

  /**
   * TimeOffBalance createMany
   */
  export type TimeOffBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeOffBalances.
     */
    data: TimeOffBalanceCreateManyInput | TimeOffBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeOffBalance createManyAndReturn
   */
  export type TimeOffBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many TimeOffBalances.
     */
    data: TimeOffBalanceCreateManyInput | TimeOffBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeOffBalance update
   */
  export type TimeOffBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeOffBalance.
     */
    data: XOR<TimeOffBalanceUpdateInput, TimeOffBalanceUncheckedUpdateInput>
    /**
     * Choose, which TimeOffBalance to update.
     */
    where: TimeOffBalanceWhereUniqueInput
  }

  /**
   * TimeOffBalance updateMany
   */
  export type TimeOffBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeOffBalances.
     */
    data: XOR<TimeOffBalanceUpdateManyMutationInput, TimeOffBalanceUncheckedUpdateManyInput>
    /**
     * Filter which TimeOffBalances to update
     */
    where?: TimeOffBalanceWhereInput
    /**
     * Limit how many TimeOffBalances to update.
     */
    limit?: number
  }

  /**
   * TimeOffBalance updateManyAndReturn
   */
  export type TimeOffBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * The data used to update TimeOffBalances.
     */
    data: XOR<TimeOffBalanceUpdateManyMutationInput, TimeOffBalanceUncheckedUpdateManyInput>
    /**
     * Filter which TimeOffBalances to update
     */
    where?: TimeOffBalanceWhereInput
    /**
     * Limit how many TimeOffBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeOffBalance upsert
   */
  export type TimeOffBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeOffBalance to update in case it exists.
     */
    where: TimeOffBalanceWhereUniqueInput
    /**
     * In case the TimeOffBalance found by the `where` argument doesn't exist, create a new TimeOffBalance with this data.
     */
    create: XOR<TimeOffBalanceCreateInput, TimeOffBalanceUncheckedCreateInput>
    /**
     * In case the TimeOffBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeOffBalanceUpdateInput, TimeOffBalanceUncheckedUpdateInput>
  }

  /**
   * TimeOffBalance delete
   */
  export type TimeOffBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
    /**
     * Filter which TimeOffBalance to delete.
     */
    where: TimeOffBalanceWhereUniqueInput
  }

  /**
   * TimeOffBalance deleteMany
   */
  export type TimeOffBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeOffBalances to delete
     */
    where?: TimeOffBalanceWhereInput
    /**
     * Limit how many TimeOffBalances to delete.
     */
    limit?: number
  }

  /**
   * TimeOffBalance without action
   */
  export type TimeOffBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOffBalance
     */
    select?: TimeOffBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOffBalance
     */
    omit?: TimeOffBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffBalanceInclude<ExtArgs> | null
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


  export const TestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    departmentId: 'departmentId',
    managerId: 'managerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TimeOffRequestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    notes: 'notes',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    reviewerId: 'reviewerId'
  };

  export type TimeOffRequestScalarFieldEnum = (typeof TimeOffRequestScalarFieldEnum)[keyof typeof TimeOffRequestScalarFieldEnum]


  export const RequestCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requestId: 'requestId'
  };

  export type RequestCommentScalarFieldEnum = (typeof RequestCommentScalarFieldEnum)[keyof typeof RequestCommentScalarFieldEnum]


  export const TimeOffBalanceScalarFieldEnum: {
    id: 'id',
    year: 'year',
    type: 'type',
    initialDays: 'initialDays',
    usedDays: 'usedDays',
    adjustmentDays: 'adjustmentDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TimeOffBalanceScalarFieldEnum = (typeof TimeOffBalanceScalarFieldEnum)[keyof typeof TimeOffBalanceScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'TimeOffType'
   */
  export type EnumTimeOffTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeOffType'>
    


  /**
   * Reference to a field of type 'TimeOffType[]'
   */
  export type ListEnumTimeOffTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeOffType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


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


  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    name?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    name?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    name?: StringWithAggregatesFilter<"Test"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departmentId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    employees?: UserListRelationFilter
    timeOffRequests?: TimeOffRequestListRelationFilter
    timeOffReviews?: TimeOffRequestListRelationFilter
    timeOffBalances?: TimeOffBalanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    department?: DepartmentOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    employees?: UserOrderByRelationAggregateInput
    timeOffRequests?: TimeOffRequestOrderByRelationAggregateInput
    timeOffReviews?: TimeOffRequestOrderByRelationAggregateInput
    timeOffBalances?: TimeOffBalanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departmentId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    employees?: UserListRelationFilter
    timeOffRequests?: TimeOffRequestListRelationFilter
    timeOffReviews?: TimeOffRequestListRelationFilter
    timeOffBalances?: TimeOffBalanceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    departmentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TimeOffRequestWhereInput = {
    AND?: TimeOffRequestWhereInput | TimeOffRequestWhereInput[]
    OR?: TimeOffRequestWhereInput[]
    NOT?: TimeOffRequestWhereInput | TimeOffRequestWhereInput[]
    id?: StringFilter<"TimeOffRequest"> | string
    type?: EnumTimeOffTypeFilter<"TimeOffRequest"> | $Enums.TimeOffType
    status?: EnumRequestStatusFilter<"TimeOffRequest"> | $Enums.RequestStatus
    startDate?: DateTimeFilter<"TimeOffRequest"> | Date | string
    endDate?: DateTimeFilter<"TimeOffRequest"> | Date | string
    duration?: FloatFilter<"TimeOffRequest"> | number
    notes?: StringNullableFilter<"TimeOffRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TimeOffRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"TimeOffRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOffRequest"> | Date | string
    userId?: StringFilter<"TimeOffRequest"> | string
    reviewerId?: StringNullableFilter<"TimeOffRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: RequestCommentListRelationFilter
  }

  export type TimeOffRequestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewerId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    comments?: RequestCommentOrderByRelationAggregateInput
  }

  export type TimeOffRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeOffRequestWhereInput | TimeOffRequestWhereInput[]
    OR?: TimeOffRequestWhereInput[]
    NOT?: TimeOffRequestWhereInput | TimeOffRequestWhereInput[]
    type?: EnumTimeOffTypeFilter<"TimeOffRequest"> | $Enums.TimeOffType
    status?: EnumRequestStatusFilter<"TimeOffRequest"> | $Enums.RequestStatus
    startDate?: DateTimeFilter<"TimeOffRequest"> | Date | string
    endDate?: DateTimeFilter<"TimeOffRequest"> | Date | string
    duration?: FloatFilter<"TimeOffRequest"> | number
    notes?: StringNullableFilter<"TimeOffRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TimeOffRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"TimeOffRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOffRequest"> | Date | string
    userId?: StringFilter<"TimeOffRequest"> | string
    reviewerId?: StringNullableFilter<"TimeOffRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: RequestCommentListRelationFilter
  }, "id">

  export type TimeOffRequestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewerId?: SortOrderInput | SortOrder
    _count?: TimeOffRequestCountOrderByAggregateInput
    _avg?: TimeOffRequestAvgOrderByAggregateInput
    _max?: TimeOffRequestMaxOrderByAggregateInput
    _min?: TimeOffRequestMinOrderByAggregateInput
    _sum?: TimeOffRequestSumOrderByAggregateInput
  }

  export type TimeOffRequestScalarWhereWithAggregatesInput = {
    AND?: TimeOffRequestScalarWhereWithAggregatesInput | TimeOffRequestScalarWhereWithAggregatesInput[]
    OR?: TimeOffRequestScalarWhereWithAggregatesInput[]
    NOT?: TimeOffRequestScalarWhereWithAggregatesInput | TimeOffRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeOffRequest"> | string
    type?: EnumTimeOffTypeWithAggregatesFilter<"TimeOffRequest"> | $Enums.TimeOffType
    status?: EnumRequestStatusWithAggregatesFilter<"TimeOffRequest"> | $Enums.RequestStatus
    startDate?: DateTimeWithAggregatesFilter<"TimeOffRequest"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TimeOffRequest"> | Date | string
    duration?: FloatWithAggregatesFilter<"TimeOffRequest"> | number
    notes?: StringNullableWithAggregatesFilter<"TimeOffRequest"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"TimeOffRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TimeOffRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeOffRequest"> | Date | string
    userId?: StringWithAggregatesFilter<"TimeOffRequest"> | string
    reviewerId?: StringNullableWithAggregatesFilter<"TimeOffRequest"> | string | null
  }

  export type RequestCommentWhereInput = {
    AND?: RequestCommentWhereInput | RequestCommentWhereInput[]
    OR?: RequestCommentWhereInput[]
    NOT?: RequestCommentWhereInput | RequestCommentWhereInput[]
    id?: StringFilter<"RequestComment"> | string
    content?: StringFilter<"RequestComment"> | string
    createdAt?: DateTimeFilter<"RequestComment"> | Date | string
    updatedAt?: DateTimeFilter<"RequestComment"> | Date | string
    requestId?: StringFilter<"RequestComment"> | string
    timeOffRequest?: XOR<TimeOffRequestScalarRelationFilter, TimeOffRequestWhereInput>
  }

  export type RequestCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    timeOffRequest?: TimeOffRequestOrderByWithRelationInput
  }

  export type RequestCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestCommentWhereInput | RequestCommentWhereInput[]
    OR?: RequestCommentWhereInput[]
    NOT?: RequestCommentWhereInput | RequestCommentWhereInput[]
    content?: StringFilter<"RequestComment"> | string
    createdAt?: DateTimeFilter<"RequestComment"> | Date | string
    updatedAt?: DateTimeFilter<"RequestComment"> | Date | string
    requestId?: StringFilter<"RequestComment"> | string
    timeOffRequest?: XOR<TimeOffRequestScalarRelationFilter, TimeOffRequestWhereInput>
  }, "id">

  export type RequestCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
    _count?: RequestCommentCountOrderByAggregateInput
    _max?: RequestCommentMaxOrderByAggregateInput
    _min?: RequestCommentMinOrderByAggregateInput
  }

  export type RequestCommentScalarWhereWithAggregatesInput = {
    AND?: RequestCommentScalarWhereWithAggregatesInput | RequestCommentScalarWhereWithAggregatesInput[]
    OR?: RequestCommentScalarWhereWithAggregatesInput[]
    NOT?: RequestCommentScalarWhereWithAggregatesInput | RequestCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestComment"> | string
    content?: StringWithAggregatesFilter<"RequestComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RequestComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequestComment"> | Date | string
    requestId?: StringWithAggregatesFilter<"RequestComment"> | string
  }

  export type TimeOffBalanceWhereInput = {
    AND?: TimeOffBalanceWhereInput | TimeOffBalanceWhereInput[]
    OR?: TimeOffBalanceWhereInput[]
    NOT?: TimeOffBalanceWhereInput | TimeOffBalanceWhereInput[]
    id?: StringFilter<"TimeOffBalance"> | string
    year?: IntFilter<"TimeOffBalance"> | number
    type?: EnumTimeOffTypeFilter<"TimeOffBalance"> | $Enums.TimeOffType
    initialDays?: FloatFilter<"TimeOffBalance"> | number
    usedDays?: FloatFilter<"TimeOffBalance"> | number
    adjustmentDays?: FloatFilter<"TimeOffBalance"> | number
    createdAt?: DateTimeFilter<"TimeOffBalance"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOffBalance"> | Date | string
    userId?: StringFilter<"TimeOffBalance"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TimeOffBalanceOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    type?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeOffBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_year_type?: TimeOffBalanceUserIdYearTypeCompoundUniqueInput
    AND?: TimeOffBalanceWhereInput | TimeOffBalanceWhereInput[]
    OR?: TimeOffBalanceWhereInput[]
    NOT?: TimeOffBalanceWhereInput | TimeOffBalanceWhereInput[]
    year?: IntFilter<"TimeOffBalance"> | number
    type?: EnumTimeOffTypeFilter<"TimeOffBalance"> | $Enums.TimeOffType
    initialDays?: FloatFilter<"TimeOffBalance"> | number
    usedDays?: FloatFilter<"TimeOffBalance"> | number
    adjustmentDays?: FloatFilter<"TimeOffBalance"> | number
    createdAt?: DateTimeFilter<"TimeOffBalance"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOffBalance"> | Date | string
    userId?: StringFilter<"TimeOffBalance"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_year_type">

  export type TimeOffBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    type?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: TimeOffBalanceCountOrderByAggregateInput
    _avg?: TimeOffBalanceAvgOrderByAggregateInput
    _max?: TimeOffBalanceMaxOrderByAggregateInput
    _min?: TimeOffBalanceMinOrderByAggregateInput
    _sum?: TimeOffBalanceSumOrderByAggregateInput
  }

  export type TimeOffBalanceScalarWhereWithAggregatesInput = {
    AND?: TimeOffBalanceScalarWhereWithAggregatesInput | TimeOffBalanceScalarWhereWithAggregatesInput[]
    OR?: TimeOffBalanceScalarWhereWithAggregatesInput[]
    NOT?: TimeOffBalanceScalarWhereWithAggregatesInput | TimeOffBalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeOffBalance"> | string
    year?: IntWithAggregatesFilter<"TimeOffBalance"> | number
    type?: EnumTimeOffTypeWithAggregatesFilter<"TimeOffBalance"> | $Enums.TimeOffType
    initialDays?: FloatWithAggregatesFilter<"TimeOffBalance"> | number
    usedDays?: FloatWithAggregatesFilter<"TimeOffBalance"> | number
    adjustmentDays?: FloatWithAggregatesFilter<"TimeOffBalance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TimeOffBalance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeOffBalance"> | Date | string
    userId?: StringWithAggregatesFilter<"TimeOffBalance"> | string
  }

  export type TestCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestUncheckedCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeOffRequestCreateInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeOffRequestsInput
    reviewer?: UserCreateNestedOneWithoutTimeOffReviewsInput
    comments?: RequestCommentCreateNestedManyWithoutTimeOffRequestInput
  }

  export type TimeOffRequestUncheckedCreateInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reviewerId?: string | null
    comments?: RequestCommentUncheckedCreateNestedManyWithoutTimeOffRequestInput
  }

  export type TimeOffRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeOffRequestsNestedInput
    reviewer?: UserUpdateOneWithoutTimeOffReviewsNestedInput
    comments?: RequestCommentUpdateManyWithoutTimeOffRequestNestedInput
  }

  export type TimeOffRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: RequestCommentUncheckedUpdateManyWithoutTimeOffRequestNestedInput
  }

  export type TimeOffRequestCreateManyInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reviewerId?: string | null
  }

  export type TimeOffRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestCommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeOffRequest: TimeOffRequestCreateNestedOneWithoutCommentsInput
  }

  export type RequestCommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type RequestCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeOffRequest?: TimeOffRequestUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type RequestCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestCommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestId: string
  }

  export type RequestCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeOffBalanceCreateInput = {
    id?: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeOffBalancesInput
  }

  export type TimeOffBalanceUncheckedCreateInput = {
    id?: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TimeOffBalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeOffBalancesNestedInput
  }

  export type TimeOffBalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeOffBalanceCreateManyInput = {
    id?: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TimeOffBalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffBalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TimeOffRequestListRelationFilter = {
    every?: TimeOffRequestWhereInput
    some?: TimeOffRequestWhereInput
    none?: TimeOffRequestWhereInput
  }

  export type TimeOffBalanceListRelationFilter = {
    every?: TimeOffBalanceWhereInput
    some?: TimeOffBalanceWhereInput
    none?: TimeOffBalanceWhereInput
  }

  export type TimeOffRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeOffBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentId?: SortOrder
    managerId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumTimeOffTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeOffType | EnumTimeOffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeOffTypeFilter<$PrismaModel> | $Enums.TimeOffType
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RequestCommentListRelationFilter = {
    every?: RequestCommentWhereInput
    some?: RequestCommentWhereInput
    none?: RequestCommentWhereInput
  }

  export type RequestCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeOffRequestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewerId?: SortOrder
  }

  export type TimeOffRequestAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type TimeOffRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewerId?: SortOrder
  }

  export type TimeOffRequestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewerId?: SortOrder
  }

  export type TimeOffRequestSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumTimeOffTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeOffType | EnumTimeOffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeOffTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimeOffType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeOffTypeFilter<$PrismaModel>
    _max?: NestedEnumTimeOffTypeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TimeOffRequestScalarRelationFilter = {
    is?: TimeOffRequestWhereInput
    isNot?: TimeOffRequestWhereInput
  }

  export type RequestCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type RequestCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type RequestCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestId?: SortOrder
  }

  export type TimeOffBalanceUserIdYearTypeCompoundUniqueInput = {
    userId: string
    year: number
    type: $Enums.TimeOffType
  }

  export type TimeOffBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    type?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TimeOffBalanceAvgOrderByAggregateInput = {
    year?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
  }

  export type TimeOffBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    type?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TimeOffBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    type?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TimeOffBalanceSumOrderByAggregateInput = {
    year?: SortOrder
    initialDays?: SortOrder
    usedDays?: SortOrder
    adjustmentDays?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TimeOffRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeOffRequestCreateWithoutUserInput, TimeOffRequestUncheckedCreateWithoutUserInput> | TimeOffRequestCreateWithoutUserInput[] | TimeOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutUserInput | TimeOffRequestCreateOrConnectWithoutUserInput[]
    createMany?: TimeOffRequestCreateManyUserInputEnvelope
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
  }

  export type TimeOffRequestCreateNestedManyWithoutReviewerInput = {
    create?: XOR<TimeOffRequestCreateWithoutReviewerInput, TimeOffRequestUncheckedCreateWithoutReviewerInput> | TimeOffRequestCreateWithoutReviewerInput[] | TimeOffRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutReviewerInput | TimeOffRequestCreateOrConnectWithoutReviewerInput[]
    createMany?: TimeOffRequestCreateManyReviewerInputEnvelope
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
  }

  export type TimeOffBalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeOffBalanceCreateWithoutUserInput, TimeOffBalanceUncheckedCreateWithoutUserInput> | TimeOffBalanceCreateWithoutUserInput[] | TimeOffBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffBalanceCreateOrConnectWithoutUserInput | TimeOffBalanceCreateOrConnectWithoutUserInput[]
    createMany?: TimeOffBalanceCreateManyUserInputEnvelope
    connect?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TimeOffRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeOffRequestCreateWithoutUserInput, TimeOffRequestUncheckedCreateWithoutUserInput> | TimeOffRequestCreateWithoutUserInput[] | TimeOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutUserInput | TimeOffRequestCreateOrConnectWithoutUserInput[]
    createMany?: TimeOffRequestCreateManyUserInputEnvelope
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
  }

  export type TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<TimeOffRequestCreateWithoutReviewerInput, TimeOffRequestUncheckedCreateWithoutReviewerInput> | TimeOffRequestCreateWithoutReviewerInput[] | TimeOffRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutReviewerInput | TimeOffRequestCreateOrConnectWithoutReviewerInput[]
    createMany?: TimeOffRequestCreateManyReviewerInputEnvelope
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
  }

  export type TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeOffBalanceCreateWithoutUserInput, TimeOffBalanceUncheckedCreateWithoutUserInput> | TimeOffBalanceCreateWithoutUserInput[] | TimeOffBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffBalanceCreateOrConnectWithoutUserInput | TimeOffBalanceCreateOrConnectWithoutUserInput[]
    createMany?: TimeOffBalanceCreateManyUserInputEnvelope
    connect?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DepartmentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeesInput, UserUpdateWithoutEmployeesInput>, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TimeOffRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeOffRequestCreateWithoutUserInput, TimeOffRequestUncheckedCreateWithoutUserInput> | TimeOffRequestCreateWithoutUserInput[] | TimeOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutUserInput | TimeOffRequestCreateOrConnectWithoutUserInput[]
    upsert?: TimeOffRequestUpsertWithWhereUniqueWithoutUserInput | TimeOffRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeOffRequestCreateManyUserInputEnvelope
    set?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    disconnect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    delete?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    update?: TimeOffRequestUpdateWithWhereUniqueWithoutUserInput | TimeOffRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeOffRequestUpdateManyWithWhereWithoutUserInput | TimeOffRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeOffRequestScalarWhereInput | TimeOffRequestScalarWhereInput[]
  }

  export type TimeOffRequestUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<TimeOffRequestCreateWithoutReviewerInput, TimeOffRequestUncheckedCreateWithoutReviewerInput> | TimeOffRequestCreateWithoutReviewerInput[] | TimeOffRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutReviewerInput | TimeOffRequestCreateOrConnectWithoutReviewerInput[]
    upsert?: TimeOffRequestUpsertWithWhereUniqueWithoutReviewerInput | TimeOffRequestUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: TimeOffRequestCreateManyReviewerInputEnvelope
    set?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    disconnect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    delete?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    update?: TimeOffRequestUpdateWithWhereUniqueWithoutReviewerInput | TimeOffRequestUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: TimeOffRequestUpdateManyWithWhereWithoutReviewerInput | TimeOffRequestUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: TimeOffRequestScalarWhereInput | TimeOffRequestScalarWhereInput[]
  }

  export type TimeOffBalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeOffBalanceCreateWithoutUserInput, TimeOffBalanceUncheckedCreateWithoutUserInput> | TimeOffBalanceCreateWithoutUserInput[] | TimeOffBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffBalanceCreateOrConnectWithoutUserInput | TimeOffBalanceCreateOrConnectWithoutUserInput[]
    upsert?: TimeOffBalanceUpsertWithWhereUniqueWithoutUserInput | TimeOffBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeOffBalanceCreateManyUserInputEnvelope
    set?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    disconnect?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    delete?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    connect?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    update?: TimeOffBalanceUpdateWithWhereUniqueWithoutUserInput | TimeOffBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeOffBalanceUpdateManyWithWhereWithoutUserInput | TimeOffBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeOffBalanceScalarWhereInput | TimeOffBalanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeOffRequestCreateWithoutUserInput, TimeOffRequestUncheckedCreateWithoutUserInput> | TimeOffRequestCreateWithoutUserInput[] | TimeOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutUserInput | TimeOffRequestCreateOrConnectWithoutUserInput[]
    upsert?: TimeOffRequestUpsertWithWhereUniqueWithoutUserInput | TimeOffRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeOffRequestCreateManyUserInputEnvelope
    set?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    disconnect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    delete?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    update?: TimeOffRequestUpdateWithWhereUniqueWithoutUserInput | TimeOffRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeOffRequestUpdateManyWithWhereWithoutUserInput | TimeOffRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeOffRequestScalarWhereInput | TimeOffRequestScalarWhereInput[]
  }

  export type TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<TimeOffRequestCreateWithoutReviewerInput, TimeOffRequestUncheckedCreateWithoutReviewerInput> | TimeOffRequestCreateWithoutReviewerInput[] | TimeOffRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutReviewerInput | TimeOffRequestCreateOrConnectWithoutReviewerInput[]
    upsert?: TimeOffRequestUpsertWithWhereUniqueWithoutReviewerInput | TimeOffRequestUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: TimeOffRequestCreateManyReviewerInputEnvelope
    set?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    disconnect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    delete?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    connect?: TimeOffRequestWhereUniqueInput | TimeOffRequestWhereUniqueInput[]
    update?: TimeOffRequestUpdateWithWhereUniqueWithoutReviewerInput | TimeOffRequestUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: TimeOffRequestUpdateManyWithWhereWithoutReviewerInput | TimeOffRequestUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: TimeOffRequestScalarWhereInput | TimeOffRequestScalarWhereInput[]
  }

  export type TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeOffBalanceCreateWithoutUserInput, TimeOffBalanceUncheckedCreateWithoutUserInput> | TimeOffBalanceCreateWithoutUserInput[] | TimeOffBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeOffBalanceCreateOrConnectWithoutUserInput | TimeOffBalanceCreateOrConnectWithoutUserInput[]
    upsert?: TimeOffBalanceUpsertWithWhereUniqueWithoutUserInput | TimeOffBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeOffBalanceCreateManyUserInputEnvelope
    set?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    disconnect?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    delete?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    connect?: TimeOffBalanceWhereUniqueInput | TimeOffBalanceWhereUniqueInput[]
    update?: TimeOffBalanceUpdateWithWhereUniqueWithoutUserInput | TimeOffBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeOffBalanceUpdateManyWithWhereWithoutUserInput | TimeOffBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeOffBalanceScalarWhereInput | TimeOffBalanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimeOffRequestsInput = {
    create?: XOR<UserCreateWithoutTimeOffRequestsInput, UserUncheckedCreateWithoutTimeOffRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeOffRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTimeOffReviewsInput = {
    create?: XOR<UserCreateWithoutTimeOffReviewsInput, UserUncheckedCreateWithoutTimeOffReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeOffReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type RequestCommentCreateNestedManyWithoutTimeOffRequestInput = {
    create?: XOR<RequestCommentCreateWithoutTimeOffRequestInput, RequestCommentUncheckedCreateWithoutTimeOffRequestInput> | RequestCommentCreateWithoutTimeOffRequestInput[] | RequestCommentUncheckedCreateWithoutTimeOffRequestInput[]
    connectOrCreate?: RequestCommentCreateOrConnectWithoutTimeOffRequestInput | RequestCommentCreateOrConnectWithoutTimeOffRequestInput[]
    createMany?: RequestCommentCreateManyTimeOffRequestInputEnvelope
    connect?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
  }

  export type RequestCommentUncheckedCreateNestedManyWithoutTimeOffRequestInput = {
    create?: XOR<RequestCommentCreateWithoutTimeOffRequestInput, RequestCommentUncheckedCreateWithoutTimeOffRequestInput> | RequestCommentCreateWithoutTimeOffRequestInput[] | RequestCommentUncheckedCreateWithoutTimeOffRequestInput[]
    connectOrCreate?: RequestCommentCreateOrConnectWithoutTimeOffRequestInput | RequestCommentCreateOrConnectWithoutTimeOffRequestInput[]
    createMany?: RequestCommentCreateManyTimeOffRequestInputEnvelope
    connect?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
  }

  export type EnumTimeOffTypeFieldUpdateOperationsInput = {
    set?: $Enums.TimeOffType
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTimeOffRequestsNestedInput = {
    create?: XOR<UserCreateWithoutTimeOffRequestsInput, UserUncheckedCreateWithoutTimeOffRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeOffRequestsInput
    upsert?: UserUpsertWithoutTimeOffRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeOffRequestsInput, UserUpdateWithoutTimeOffRequestsInput>, UserUncheckedUpdateWithoutTimeOffRequestsInput>
  }

  export type UserUpdateOneWithoutTimeOffReviewsNestedInput = {
    create?: XOR<UserCreateWithoutTimeOffReviewsInput, UserUncheckedCreateWithoutTimeOffReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeOffReviewsInput
    upsert?: UserUpsertWithoutTimeOffReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeOffReviewsInput, UserUpdateWithoutTimeOffReviewsInput>, UserUncheckedUpdateWithoutTimeOffReviewsInput>
  }

  export type RequestCommentUpdateManyWithoutTimeOffRequestNestedInput = {
    create?: XOR<RequestCommentCreateWithoutTimeOffRequestInput, RequestCommentUncheckedCreateWithoutTimeOffRequestInput> | RequestCommentCreateWithoutTimeOffRequestInput[] | RequestCommentUncheckedCreateWithoutTimeOffRequestInput[]
    connectOrCreate?: RequestCommentCreateOrConnectWithoutTimeOffRequestInput | RequestCommentCreateOrConnectWithoutTimeOffRequestInput[]
    upsert?: RequestCommentUpsertWithWhereUniqueWithoutTimeOffRequestInput | RequestCommentUpsertWithWhereUniqueWithoutTimeOffRequestInput[]
    createMany?: RequestCommentCreateManyTimeOffRequestInputEnvelope
    set?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    disconnect?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    delete?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    connect?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    update?: RequestCommentUpdateWithWhereUniqueWithoutTimeOffRequestInput | RequestCommentUpdateWithWhereUniqueWithoutTimeOffRequestInput[]
    updateMany?: RequestCommentUpdateManyWithWhereWithoutTimeOffRequestInput | RequestCommentUpdateManyWithWhereWithoutTimeOffRequestInput[]
    deleteMany?: RequestCommentScalarWhereInput | RequestCommentScalarWhereInput[]
  }

  export type RequestCommentUncheckedUpdateManyWithoutTimeOffRequestNestedInput = {
    create?: XOR<RequestCommentCreateWithoutTimeOffRequestInput, RequestCommentUncheckedCreateWithoutTimeOffRequestInput> | RequestCommentCreateWithoutTimeOffRequestInput[] | RequestCommentUncheckedCreateWithoutTimeOffRequestInput[]
    connectOrCreate?: RequestCommentCreateOrConnectWithoutTimeOffRequestInput | RequestCommentCreateOrConnectWithoutTimeOffRequestInput[]
    upsert?: RequestCommentUpsertWithWhereUniqueWithoutTimeOffRequestInput | RequestCommentUpsertWithWhereUniqueWithoutTimeOffRequestInput[]
    createMany?: RequestCommentCreateManyTimeOffRequestInputEnvelope
    set?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    disconnect?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    delete?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    connect?: RequestCommentWhereUniqueInput | RequestCommentWhereUniqueInput[]
    update?: RequestCommentUpdateWithWhereUniqueWithoutTimeOffRequestInput | RequestCommentUpdateWithWhereUniqueWithoutTimeOffRequestInput[]
    updateMany?: RequestCommentUpdateManyWithWhereWithoutTimeOffRequestInput | RequestCommentUpdateManyWithWhereWithoutTimeOffRequestInput[]
    deleteMany?: RequestCommentScalarWhereInput | RequestCommentScalarWhereInput[]
  }

  export type TimeOffRequestCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TimeOffRequestCreateWithoutCommentsInput, TimeOffRequestUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutCommentsInput
    connect?: TimeOffRequestWhereUniqueInput
  }

  export type TimeOffRequestUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TimeOffRequestCreateWithoutCommentsInput, TimeOffRequestUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TimeOffRequestCreateOrConnectWithoutCommentsInput
    upsert?: TimeOffRequestUpsertWithoutCommentsInput
    connect?: TimeOffRequestWhereUniqueInput
    update?: XOR<XOR<TimeOffRequestUpdateToOneWithWhereWithoutCommentsInput, TimeOffRequestUpdateWithoutCommentsInput>, TimeOffRequestUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutTimeOffBalancesInput = {
    create?: XOR<UserCreateWithoutTimeOffBalancesInput, UserUncheckedCreateWithoutTimeOffBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeOffBalancesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTimeOffBalancesNestedInput = {
    create?: XOR<UserCreateWithoutTimeOffBalancesInput, UserUncheckedCreateWithoutTimeOffBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeOffBalancesInput
    upsert?: UserUpsertWithoutTimeOffBalancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeOffBalancesInput, UserUpdateWithoutTimeOffBalancesInput>, UserUncheckedUpdateWithoutTimeOffBalancesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumTimeOffTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeOffType | EnumTimeOffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeOffTypeFilter<$PrismaModel> | $Enums.TimeOffType
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTimeOffTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeOffType | EnumTimeOffTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeOffType[] | ListEnumTimeOffTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeOffTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimeOffType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeOffTypeFilter<$PrismaModel>
    _max?: NestedEnumTimeOffTypeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestUncheckedCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    departmentId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
  }

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutEmployeesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    timeOffRequests?: TimeOffRequestCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    timeOffRequests?: TimeOffRequestUncheckedCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    employees?: UserCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestUncheckedCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type TimeOffRequestCreateWithoutUserInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer?: UserCreateNestedOneWithoutTimeOffReviewsInput
    comments?: RequestCommentCreateNestedManyWithoutTimeOffRequestInput
  }

  export type TimeOffRequestUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
    comments?: RequestCommentUncheckedCreateNestedManyWithoutTimeOffRequestInput
  }

  export type TimeOffRequestCreateOrConnectWithoutUserInput = {
    where: TimeOffRequestWhereUniqueInput
    create: XOR<TimeOffRequestCreateWithoutUserInput, TimeOffRequestUncheckedCreateWithoutUserInput>
  }

  export type TimeOffRequestCreateManyUserInputEnvelope = {
    data: TimeOffRequestCreateManyUserInput | TimeOffRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeOffRequestCreateWithoutReviewerInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeOffRequestsInput
    comments?: RequestCommentCreateNestedManyWithoutTimeOffRequestInput
  }

  export type TimeOffRequestUncheckedCreateWithoutReviewerInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    comments?: RequestCommentUncheckedCreateNestedManyWithoutTimeOffRequestInput
  }

  export type TimeOffRequestCreateOrConnectWithoutReviewerInput = {
    where: TimeOffRequestWhereUniqueInput
    create: XOR<TimeOffRequestCreateWithoutReviewerInput, TimeOffRequestUncheckedCreateWithoutReviewerInput>
  }

  export type TimeOffRequestCreateManyReviewerInputEnvelope = {
    data: TimeOffRequestCreateManyReviewerInput | TimeOffRequestCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type TimeOffBalanceCreateWithoutUserInput = {
    id?: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffBalanceUncheckedCreateWithoutUserInput = {
    id?: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffBalanceCreateOrConnectWithoutUserInput = {
    where: TimeOffBalanceWhereUniqueInput
    create: XOR<TimeOffBalanceCreateWithoutUserInput, TimeOffBalanceUncheckedCreateWithoutUserInput>
  }

  export type TimeOffBalanceCreateManyUserInputEnvelope = {
    data: TimeOffBalanceCreateManyUserInput | TimeOffBalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    timeOffRequests?: TimeOffRequestUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    timeOffRequests?: TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type TimeOffRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeOffRequestWhereUniqueInput
    update: XOR<TimeOffRequestUpdateWithoutUserInput, TimeOffRequestUncheckedUpdateWithoutUserInput>
    create: XOR<TimeOffRequestCreateWithoutUserInput, TimeOffRequestUncheckedCreateWithoutUserInput>
  }

  export type TimeOffRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeOffRequestWhereUniqueInput
    data: XOR<TimeOffRequestUpdateWithoutUserInput, TimeOffRequestUncheckedUpdateWithoutUserInput>
  }

  export type TimeOffRequestUpdateManyWithWhereWithoutUserInput = {
    where: TimeOffRequestScalarWhereInput
    data: XOR<TimeOffRequestUpdateManyMutationInput, TimeOffRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeOffRequestScalarWhereInput = {
    AND?: TimeOffRequestScalarWhereInput | TimeOffRequestScalarWhereInput[]
    OR?: TimeOffRequestScalarWhereInput[]
    NOT?: TimeOffRequestScalarWhereInput | TimeOffRequestScalarWhereInput[]
    id?: StringFilter<"TimeOffRequest"> | string
    type?: EnumTimeOffTypeFilter<"TimeOffRequest"> | $Enums.TimeOffType
    status?: EnumRequestStatusFilter<"TimeOffRequest"> | $Enums.RequestStatus
    startDate?: DateTimeFilter<"TimeOffRequest"> | Date | string
    endDate?: DateTimeFilter<"TimeOffRequest"> | Date | string
    duration?: FloatFilter<"TimeOffRequest"> | number
    notes?: StringNullableFilter<"TimeOffRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TimeOffRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"TimeOffRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOffRequest"> | Date | string
    userId?: StringFilter<"TimeOffRequest"> | string
    reviewerId?: StringNullableFilter<"TimeOffRequest"> | string | null
  }

  export type TimeOffRequestUpsertWithWhereUniqueWithoutReviewerInput = {
    where: TimeOffRequestWhereUniqueInput
    update: XOR<TimeOffRequestUpdateWithoutReviewerInput, TimeOffRequestUncheckedUpdateWithoutReviewerInput>
    create: XOR<TimeOffRequestCreateWithoutReviewerInput, TimeOffRequestUncheckedCreateWithoutReviewerInput>
  }

  export type TimeOffRequestUpdateWithWhereUniqueWithoutReviewerInput = {
    where: TimeOffRequestWhereUniqueInput
    data: XOR<TimeOffRequestUpdateWithoutReviewerInput, TimeOffRequestUncheckedUpdateWithoutReviewerInput>
  }

  export type TimeOffRequestUpdateManyWithWhereWithoutReviewerInput = {
    where: TimeOffRequestScalarWhereInput
    data: XOR<TimeOffRequestUpdateManyMutationInput, TimeOffRequestUncheckedUpdateManyWithoutReviewerInput>
  }

  export type TimeOffBalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeOffBalanceWhereUniqueInput
    update: XOR<TimeOffBalanceUpdateWithoutUserInput, TimeOffBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<TimeOffBalanceCreateWithoutUserInput, TimeOffBalanceUncheckedCreateWithoutUserInput>
  }

  export type TimeOffBalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeOffBalanceWhereUniqueInput
    data: XOR<TimeOffBalanceUpdateWithoutUserInput, TimeOffBalanceUncheckedUpdateWithoutUserInput>
  }

  export type TimeOffBalanceUpdateManyWithWhereWithoutUserInput = {
    where: TimeOffBalanceScalarWhereInput
    data: XOR<TimeOffBalanceUpdateManyMutationInput, TimeOffBalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeOffBalanceScalarWhereInput = {
    AND?: TimeOffBalanceScalarWhereInput | TimeOffBalanceScalarWhereInput[]
    OR?: TimeOffBalanceScalarWhereInput[]
    NOT?: TimeOffBalanceScalarWhereInput | TimeOffBalanceScalarWhereInput[]
    id?: StringFilter<"TimeOffBalance"> | string
    year?: IntFilter<"TimeOffBalance"> | number
    type?: EnumTimeOffTypeFilter<"TimeOffBalance"> | $Enums.TimeOffType
    initialDays?: FloatFilter<"TimeOffBalance"> | number
    usedDays?: FloatFilter<"TimeOffBalance"> | number
    adjustmentDays?: FloatFilter<"TimeOffBalance"> | number
    createdAt?: DateTimeFilter<"TimeOffBalance"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOffBalance"> | Date | string
    userId?: StringFilter<"TimeOffBalance"> | string
  }

  export type UserCreateWithoutTimeOffRequestsInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    timeOffReviews?: TimeOffRequestCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeOffRequestsInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    timeOffReviews?: TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput
    timeOffBalances?: TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeOffRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeOffRequestsInput, UserUncheckedCreateWithoutTimeOffRequestsInput>
  }

  export type UserCreateWithoutTimeOffReviewsInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestCreateNestedManyWithoutUserInput
    timeOffBalances?: TimeOffBalanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeOffReviewsInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestUncheckedCreateNestedManyWithoutUserInput
    timeOffBalances?: TimeOffBalanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeOffReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeOffReviewsInput, UserUncheckedCreateWithoutTimeOffReviewsInput>
  }

  export type RequestCommentCreateWithoutTimeOffRequestInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCommentUncheckedCreateWithoutTimeOffRequestInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCommentCreateOrConnectWithoutTimeOffRequestInput = {
    where: RequestCommentWhereUniqueInput
    create: XOR<RequestCommentCreateWithoutTimeOffRequestInput, RequestCommentUncheckedCreateWithoutTimeOffRequestInput>
  }

  export type RequestCommentCreateManyTimeOffRequestInputEnvelope = {
    data: RequestCommentCreateManyTimeOffRequestInput | RequestCommentCreateManyTimeOffRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTimeOffRequestsInput = {
    update: XOR<UserUpdateWithoutTimeOffRequestsInput, UserUncheckedUpdateWithoutTimeOffRequestsInput>
    create: XOR<UserCreateWithoutTimeOffRequestsInput, UserUncheckedCreateWithoutTimeOffRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeOffRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeOffRequestsInput, UserUncheckedUpdateWithoutTimeOffRequestsInput>
  }

  export type UserUpdateWithoutTimeOffRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    timeOffReviews?: TimeOffRequestUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeOffRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    timeOffReviews?: TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTimeOffReviewsInput = {
    update: XOR<UserUpdateWithoutTimeOffReviewsInput, UserUncheckedUpdateWithoutTimeOffReviewsInput>
    create: XOR<UserCreateWithoutTimeOffReviewsInput, UserUncheckedCreateWithoutTimeOffReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeOffReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeOffReviewsInput, UserUncheckedUpdateWithoutTimeOffReviewsInput>
  }

  export type UserUpdateWithoutTimeOffReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUpdateManyWithoutUserNestedInput
    timeOffBalances?: TimeOffBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeOffReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput
    timeOffBalances?: TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestCommentUpsertWithWhereUniqueWithoutTimeOffRequestInput = {
    where: RequestCommentWhereUniqueInput
    update: XOR<RequestCommentUpdateWithoutTimeOffRequestInput, RequestCommentUncheckedUpdateWithoutTimeOffRequestInput>
    create: XOR<RequestCommentCreateWithoutTimeOffRequestInput, RequestCommentUncheckedCreateWithoutTimeOffRequestInput>
  }

  export type RequestCommentUpdateWithWhereUniqueWithoutTimeOffRequestInput = {
    where: RequestCommentWhereUniqueInput
    data: XOR<RequestCommentUpdateWithoutTimeOffRequestInput, RequestCommentUncheckedUpdateWithoutTimeOffRequestInput>
  }

  export type RequestCommentUpdateManyWithWhereWithoutTimeOffRequestInput = {
    where: RequestCommentScalarWhereInput
    data: XOR<RequestCommentUpdateManyMutationInput, RequestCommentUncheckedUpdateManyWithoutTimeOffRequestInput>
  }

  export type RequestCommentScalarWhereInput = {
    AND?: RequestCommentScalarWhereInput | RequestCommentScalarWhereInput[]
    OR?: RequestCommentScalarWhereInput[]
    NOT?: RequestCommentScalarWhereInput | RequestCommentScalarWhereInput[]
    id?: StringFilter<"RequestComment"> | string
    content?: StringFilter<"RequestComment"> | string
    createdAt?: DateTimeFilter<"RequestComment"> | Date | string
    updatedAt?: DateTimeFilter<"RequestComment"> | Date | string
    requestId?: StringFilter<"RequestComment"> | string
  }

  export type TimeOffRequestCreateWithoutCommentsInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeOffRequestsInput
    reviewer?: UserCreateNestedOneWithoutTimeOffReviewsInput
  }

  export type TimeOffRequestUncheckedCreateWithoutCommentsInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reviewerId?: string | null
  }

  export type TimeOffRequestCreateOrConnectWithoutCommentsInput = {
    where: TimeOffRequestWhereUniqueInput
    create: XOR<TimeOffRequestCreateWithoutCommentsInput, TimeOffRequestUncheckedCreateWithoutCommentsInput>
  }

  export type TimeOffRequestUpsertWithoutCommentsInput = {
    update: XOR<TimeOffRequestUpdateWithoutCommentsInput, TimeOffRequestUncheckedUpdateWithoutCommentsInput>
    create: XOR<TimeOffRequestCreateWithoutCommentsInput, TimeOffRequestUncheckedCreateWithoutCommentsInput>
    where?: TimeOffRequestWhereInput
  }

  export type TimeOffRequestUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TimeOffRequestWhereInput
    data: XOR<TimeOffRequestUpdateWithoutCommentsInput, TimeOffRequestUncheckedUpdateWithoutCommentsInput>
  }

  export type TimeOffRequestUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeOffRequestsNestedInput
    reviewer?: UserUpdateOneWithoutTimeOffReviewsNestedInput
  }

  export type TimeOffRequestUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutTimeOffBalancesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutTimeOffBalancesInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
    managerId?: string | null
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    timeOffRequests?: TimeOffRequestUncheckedCreateNestedManyWithoutUserInput
    timeOffReviews?: TimeOffRequestUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutTimeOffBalancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeOffBalancesInput, UserUncheckedCreateWithoutTimeOffBalancesInput>
  }

  export type UserUpsertWithoutTimeOffBalancesInput = {
    update: XOR<UserUpdateWithoutTimeOffBalancesInput, UserUncheckedUpdateWithoutTimeOffBalancesInput>
    create: XOR<UserCreateWithoutTimeOffBalancesInput, UserUncheckedCreateWithoutTimeOffBalancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeOffBalancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeOffBalancesInput, UserUncheckedUpdateWithoutTimeOffBalancesInput>
  }

  export type UserUpdateWithoutTimeOffBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeOffBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    managerId?: string | null
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyManagerInput = {
    id?: string
    email: string
    name: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentId?: string | null
  }

  export type TimeOffRequestCreateManyUserInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
  }

  export type TimeOffRequestCreateManyReviewerInput = {
    id?: string
    type: $Enums.TimeOffType
    status?: $Enums.RequestStatus
    startDate: Date | string
    endDate: Date | string
    duration: number
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TimeOffBalanceCreateManyUserInput = {
    id?: string
    year: number
    type: $Enums.TimeOffType
    initialDays: number
    usedDays: number
    adjustmentDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    timeOffRequests?: TimeOffRequestUncheckedUpdateManyWithoutUserNestedInput
    timeOffReviews?: TimeOffRequestUncheckedUpdateManyWithoutReviewerNestedInput
    timeOffBalances?: TimeOffBalanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeOffRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneWithoutTimeOffReviewsNestedInput
    comments?: RequestCommentUpdateManyWithoutTimeOffRequestNestedInput
  }

  export type TimeOffRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: RequestCommentUncheckedUpdateManyWithoutTimeOffRequestNestedInput
  }

  export type TimeOffRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeOffRequestUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeOffRequestsNestedInput
    comments?: RequestCommentUpdateManyWithoutTimeOffRequestNestedInput
  }

  export type TimeOffRequestUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    comments?: RequestCommentUncheckedUpdateManyWithoutTimeOffRequestNestedInput
  }

  export type TimeOffRequestUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimeOffBalanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffBalanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffBalanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTimeOffTypeFieldUpdateOperationsInput | $Enums.TimeOffType
    initialDays?: FloatFieldUpdateOperationsInput | number
    usedDays?: FloatFieldUpdateOperationsInput | number
    adjustmentDays?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCommentCreateManyTimeOffRequestInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestCommentUpdateWithoutTimeOffRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCommentUncheckedUpdateWithoutTimeOffRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCommentUncheckedUpdateManyWithoutTimeOffRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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