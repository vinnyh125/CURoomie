export default function Create() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-center">
          <div>
            <input
              type="email"
              className="border border-black mb-6"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              className="border border-black mb-6"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="submit"
              className="border border-black"
              value="Create"
            />
          </div>
        </div>
      </div>
    </>
  )
}