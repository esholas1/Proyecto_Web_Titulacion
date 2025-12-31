import { writable } from "svelte/store"

interface User {
  name: string
  email: string
  role: "postulante" | "reclutador"
}

const isBrowser = typeof window !== "undefined"

const initialUser: User | null =
  isBrowser && localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null

export const auth = writable<User | null>(initialUser)

auth.subscribe((value) => {
  if (isBrowser) {
    if (value) {
      localStorage.setItem("user", JSON.stringify(value))
    } else {
      localStorage.removeItem("user")
    }
  }
})

export const login = (email: string, role: "postulante" | "reclutador") => {
  const name = email.split("@")[0]
  auth.set({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    email,
    role,
  })
}

export const logout = () => {
  auth.set(null)
}
