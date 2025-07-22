export default function CatalogLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
     

      <main>{children}</main>

     
    </>
  )
}
