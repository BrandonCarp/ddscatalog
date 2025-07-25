export default function CalLayout({
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
