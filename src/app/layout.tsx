import { Caudex } from 'next/font/google'
import { Eczar } from 'next/font/google'
import './styles.css'

const caudex = Caudex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caudex',
  weight: '400'
})
const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eczar',
})

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${caudex.variable} ${eczar.variable}`}>
        {children}
      </body>
    </html>
  );
}