import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  const menuList = [
    { name: 'ホーム', link: '/'},
    { name: '検定合格者', link: '/success'},
    { name: '珠算競技会', link: '/meet'},
    { name: '連盟行事', link: '/event'},
    { name: '会員指導教場', link: '/place'},
    { name: '事業情報', link: '/jigyou'},
    { name: 'お問合せ', link: '/contact'},
 ]
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-300">
      <div className="container mx-auto min-h-full box-border p-4 sm:p-8 rounded-lg bg-white text-gray-900">
        <Header list={menuList}></Header>
        <hr className="mb-4" />
        <div className='md:flex flex-row'>
          <div className='basis-3/4'>
            <main className="min-h-screen py-0 px-2 flex flex-col">
              {children}
            </main>
          </div>
          <div className='basis-1/4'>
            <div className="md:ml-1 box-border border-2 rounded-lg border-black p-1">
              <p className='font-bold mb-4'>公益社団法人群馬県珠算連盟</p>
              <p>所在地高崎市飯塚町1456番地</p>
              <p>電　話：027-362-2175</p>
              <p>FAX　：027-362-5957</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}