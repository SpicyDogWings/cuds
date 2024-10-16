import { keypress } from "keypress/cliffy"

export default async () => {
  console.clear();
  console.log(`


┌───Options───────┐  
│                 │─┐
│  n. Name        │ │
│  c. Comment     │ │
│  e. Exec        │ │
│  i. Icon        │ │
│                 │ │
│  w. Write       │ │
│  q. Quit        │ │
│                 │ │
└─────────────────┘ │
 └──────────────────┘


    `);
  console.log("q: return to main menu");
  for await (const event of keypress()) {
    if (event.key === "q") {
      return;
    }
  }
}