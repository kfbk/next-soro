export default function Footer() {
  const date = new Date()
  return (
    <footer className="bg-gray-800 mt-4">
      {/* {{ date.getFullYear() }} */}
      <p className="p-2 text-center text-white">Copyright © 公益社団法人群馬県珠算連盟 . All Rights Reserved.</p>
    </footer>
  )
}