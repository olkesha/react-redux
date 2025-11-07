import type { MouseEventHandler, ReactNode } from "react"

export type TButtonProps = {
  type?: "button" | "submit" | "reset" | undefined,
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type TCardProps = {
  id: number,
  title: string,
  image: string,
}

export type TCardInfoProps = {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
}

export type TProducts = {
  products: TProduct[]
}

export type TProduct = {
  id: number,
  title: string,
  image: string
}
