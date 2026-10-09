// O reenvio do provedor pode trazer a mesma chave com espaço ou caractere invisível (U+200B etc.).
export function normalizeKey(key: string): string {
  return key.replace(/[\u200B-\u200D\u2060\uFEFF]/g, "").trim().toLowerCase();
}
