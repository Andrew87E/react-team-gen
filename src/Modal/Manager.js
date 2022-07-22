
export default function Manager() {

    return (
<>
<div>
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manager Name</label>
    <input type="name" name="name" id="name" className="w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Andrew Edwards" required="" />
</div>
    <div>
        <label for="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manager ID</label>
        <input type="id" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="1234" required="" />
    </div>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manager Email</label>
            <input type="email" name="email" id="email" placeholder="Manager@Company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
        </div>
        <div>
            <label for="office-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manager Office Number</label>
            <input type="office-number" name="office-number" id="office-number" placeholder="Manager@Company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
        </div>
</>
)
}