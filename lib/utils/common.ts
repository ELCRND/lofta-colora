import { IProduct } from "@/types/products";

export function bodyScrollOff() {
  document.body.style.paddingRight = "17px";
  document.body.style.overflow = "hidden";
}
export function bodyScrollOn() {
  document.body.style.paddingRight = "0";
  document.body.style.overflow = "visible";
}
