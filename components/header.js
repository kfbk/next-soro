import Link from "next/link"
import Image from "next/image"
import React, {useState} from 'react'
import { useRouter } from "next/router"

export default function Header(props) {
  const router = useRouter();
  // console.log(router.pathname)
  const [openMenu, setOpenMenu] = useState(false)
  // console.log("openMenu=", openMenu)
  const data = props.list
  const menuFunction = () => {
    setOpenMenu(!openMenu)
  }
  return (
    // <nav className="flex relative">
    <nav className="relative">
      {/* 初期サイズを無視して、必要に応じてフレックスアイテムを拡大および縮小 */}
      {/* <div className="flex-none sm:flex-1">
        <Link href="/">
          <Image
            src="/images/title.jpeg"
            alt="logo"
            width={100} height={100}
          ></Image>
        </Link>
      </div> */}
      {openMenu? (
        <div
          className="flex flex-row
            absolute z-10 top-0 right-0
            min-h-fit min-w-full"
        >
          <div className="basis-1/2"></div>
          <div className="basis-1/2 bg-white">
            <ul className="text-center border-l-2">
              <li className="p-2 border-b-2">
                <button onClick={menuFunction} className="font-bold">
                  閉じる
                </button>
              </li>
              {data.map(
                (value, index) => (
                  <li key={index} className="p-2 bprder-b-2">
                    <Link href={value.link} onClick={menuFunction}>
                      <span className={
                        router.pathname === (value.link)
                        ? "bg-gray-600 text-white"
                        : "bg-white"
                      }>
                          {value.name}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ): undefined}
      <div className="sm:flex">公益社団法人群馬県珠算連盟
      <Image src="/images/soroban.jpeg"
          alt="logo"
          width={200} height={10}
        ></Image>
      </div>
      <div className="flex-initial font-bold m-5">
        <ul className="sm:flex hidden flex-initial text-left">
          {data.map(
            (value, index) => (
              <li key={index} className="p-4">
                <Link href={value.link}>
                  <span className={
                    router.pathname === (value.link)
                    ? "bg-gray-600 text-white"
                    : "bg-white"
                  }>
                    {value.name}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <button
        onClick={menuFunction}
        className="flex-initial
        absolute top-0 right-0 sm:hidden"
      >
        <Image src="/images/menu.png"
          alt="menu"
          width={50} height={10}
        ></Image>
      </button>
    </nav>
  )
}