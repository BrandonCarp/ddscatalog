import Form from 'next/form'

export default function SearchNav() {
  return (
    <div className="flex items-center justify-between  w-full p-5 bg-gray-100">
     

      {/* Center: Search form */}
      <Form action="/search" className="mx-auto flex items-center ">
        <input
          name="query"
          className="border border-gray-200 h-[38px] w-[20rem] text-gray-700 bg-white"
         
          placeholder='Search C'
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-700 text-white hover:bg-blue-500"
        >
          Submit
        </button>
      </Form>
       {/* Left: UL list */}
      <ul className="flex space-x-5">
        <li className="bg-green-800 px-6 py-1">
          <h1>1</h1>
        </li>
        <li className="bg-green-800 px-6 py-1">
          <h1>2</h1>
        </li>
        <li className="bg-green-800 px-6 py-1">
          <h1>3</h1>
        </li>
      </ul>
    </div>
  );
}
