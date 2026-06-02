// 画像など public 配下の静的アセットへのパスを basePath 込みで解決する。
// next/link や <img src> に basePath は自動適用されるが、
// CSSのurl()やインラインstyleのbackground等には適用されないため、
// それらで使う画像URLはこのヘルパーで前置する。
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
