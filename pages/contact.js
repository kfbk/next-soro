export default function Contact() {
  return (
    <>
      <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label className="block float-left w-20">
            名前：
          </label>
            <input type="text" name="name" required
              className="box-border border-2 border-gray-600"
            />
        </p>
        <p className="mt-2">
          <label className="block float-left w-20">
            Eメール：
          </label>
            <input type="email" name="email"  required
              className="box-border border-2 border-gray-600"
              />
        </p>
        <p className="mt-2">
          <label className="block float-left w-20">
            内容：
          </label>
            <textarea  name="content" cols="50" rows="10"  required
              className="box-border border-2 border-gray-600"
              />
        </p>
        <p className="mt-2">
          <button type="submit" className="tw-btn-primary">Send</button>
        </p>
      </form>
    </>
  )
}
