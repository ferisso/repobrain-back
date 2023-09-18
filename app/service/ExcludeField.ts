

export default function ExcludeField(model: any, field: string) {
  return Object.fromEntries(
    Object.entries(model).filter(([key]) => !field.includes(key))
  )
}