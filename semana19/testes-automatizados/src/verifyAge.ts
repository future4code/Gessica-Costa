export const verifyAge = (casino: Casino, users: User[]): Result => {
  let allowed: string[] = []
  let unallowed: string[] = []
  let allowedBrazilian: string[] = []
  let allowedAmerican: string[] = []
  let unallowedBrazilian: string[] = []
  let unallowedAmerican: string[] = []

  users && users.map((u: any) => {
    if (casino.location === LOCATION.BRAZIL) {
      u.age >= 18 ?
        allowed.push(u)
        : unallowed.push(u)
    } else if (casino.location = LOCATION.EUA) {
      (u.age >= 21) ?
        allowed.push(u)
        : unallowed.push(u)
    }
  })

  allowed && allowed.map((u: any) => {
    u.nacionality === NACIONALITY.BRAZILIAN ?
      allowedBrazilian.push(u.name)
      : allowedAmerican.push(u.name)
  })

  unallowed && unallowed.map((u: any) => {
    u.nacionality === NACIONALITY.BRAZILIAN ?
      unallowedBrazilian.push(u.name)
      : unallowedAmerican.push(u.name)
  })

  return {
    brazilian: {
      allowed: allowedBrazilian,
      unallowed: unallowedBrazilian
    },
    american: {
      allowed: allowedAmerican,
      unallowed: unallowedAmerican
    }
  }
}

// export function verifyAge(casino: Casino, users: User[]): Result {
//     const allowed: User[] = [];
//     const unallowed: User[] = [];

//     for (const user of users) {
//       if (casino.location === LOCATION.EUA) {
//         if (user.age >= 21) {
//           allowed.push(user);
//         } else {
//           unallowed.push(user);
//         }
//       } else if (casino.location === LOCATION.BRAZIL) {
//         if (user.age >= 18) {
//           allowed.push(user);
//         } else {
//           unallowed.push(user);
//         }
//         break;
//       }
//     }

//     return {
//       brazilian: {
//         allowed: allowed
//           .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
//           .map((u) => u.name),
//         unallowed: unallowed
//           .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
//           .map((u) => u.name),
//       },
//       american: {
//         allowed: allowed
//           .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
//           .map((u) => u.name),
//         unallowed: unallowed
//           .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
//           .map((u) => u.name),
//       },
//     };
//   }

export interface User {
  name: string,
  age: number,
  nacionality: NACIONALITY
}

export interface Casino {
  name: string,
  location: LOCATION
}

export interface Result {
  brazilian: ResultItem
  american: ResultItem
}

export interface ResultItem {
  allowed: string[]
  unallowed: string[]
}

export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN"
}