
export default function Engineer() {

    return (
<>
<div>
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Engineer Name</label>
    <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Andrew Edwards" required="" />
</div>
    <div>
        <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Engineer ID</label>
        <input type="id" name="id" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="1234" required="" />
    </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Engineer Email</label>
            <input type="email" name="email" id="email" placeholder="Engineer@Company.com" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
        </div>
        <div>
            <label for="github" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Engineer GitHub</label>
            <input type="github" name="github" id="github" placeholder="Engineer@Company.com" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
        </div>
</>
)
}