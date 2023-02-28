<div class="w-10/12 mx-auto my-10">
  <header class="flex text-4xl justify-between items-center mb-10">
    <h1 class="font-bold">todo</h1>
    <div id="add-item" class="text-6xl">+</div>
  </header>
  <div class="wrapper flex">
    <aside class="w-1/5 text-xl font-light">
      <ul id="tags" class="mb-16">
        <li class="mb-6"><a href="#work" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div>
          work</a></li>
        <li class="mb-6"><a href="#study" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div>
          study</a></li>
        <li class="mb-6"><a href="#entertainment" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div>
          entertainment</a></li>
        <li class="mb-6"><a href="#family" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-green-300 rounded-full mr-2"></div>
          family</a></li>
      </ul>
      <div id="hide-done-task" >
        <label class="inline-flex items-center">
          <input type="checkbox" class="w-6 h-6 rounded-2xl mr-2"/>
          Hide Done Task
        </label>
      </div>
    </aside>
    <main class="w-4/5 columns-2 gap-x-6">
      <div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
        <div class="task-top flex justify-between mb-4 items-center">
          <h2 class="text-2xl font-bold">The first task title</h2>
          <div>
            <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
              <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xl mb-6">sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom flex justify-between">
          <div class="tags">
            <ul class="flex gap-2">
              <li><a href="#work"><div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div></a></li>
              <li><a href="#study"><div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div></a></li>
              <li><a href="#entertainment"><div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div></a></li>
            </ul>
          </div>
          <label class="inline-flex items-center text-xl font-light">
            <input type="checkbox" class="w-6 h-6 rounded-xl mr-2"/>
            Done
          </label>
        </div>
      </div>
      <div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
        <div class="task-top flex justify-between mb-4 items-center">
          <h2 class="text-2xl font-bold">The second task title</h2>
          <div>
            <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
              <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xl mb-6">sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom flex justify-between">
          <div class="tags">
            <ul class="flex gap-2">
              <li><a href="#work"><div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div></a></li>
              <li><a href="#study"><div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div></a></li>
              <li><a href="#entertainment"><div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div></a></li>
            </ul>
          </div>
          <label class="inline-flex items-center text-xl font-light">
            <input type="checkbox" class="w-6 h-6 rounded-xl mr-2"/>
            Done
          </label>
        </div>
      </div>
      <div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
        <div class="task-top flex justify-between mb-4 items-center">
          <h2 class="text-2xl font-bold">The third task title</h2>
          <div>
            <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
              <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xl mb-6">sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom flex justify-between">
          <div class="tags">
            <ul class="flex gap-2">
              <li><a href="#work"><div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div></a></li>
              <li><a href="#study"><div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div></a></li>
              <li><a href="#entertainment"><div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div></a></li>
            </ul>
          </div>
          <label class="inline-flex items-center text-xl font-light">
            <input type="checkbox" class="w-6 h-6 rounded-xl mr-2"/>
            Done
          </label>
        </div>
      </div>
      <div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
        <div class="task-top flex justify-between mb-4 items-center">
          <h2 class="text-2xl font-bold">The fourth task title</h2>
          <div>
            <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
              <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xl mb-6">sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom flex justify-between">
          <div class="tags">
            <ul class="flex gap-2">
              <li><a href="#work"><div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div></a></li>
              <li><a href="#study"><div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div></a></li>
              <li><a href="#entertainment"><div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div></a></li>
            </ul>
          </div>
          <label class="inline-flex items-center text-xl font-light">
            <input type="checkbox" class="w-6 h-6 rounded-xl mr-2"/>
            Done
          </label>
        </div>
      </div>
      <div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
        <div class="task-top flex justify-between mb-4 items-center">
          <h2 class="text-2xl font-bold">The fifth task title</h2>
          <div>
            <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
              <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xl mb-6">sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom flex justify-between">
          <div class="tags">
            <ul class="flex gap-2">
              <li><a href="#work"><div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div></a></li>
              <li><a href="#study"><div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div></a></li>
              <li><a href="#entertainment"><div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div></a></li>
            </ul>
          </div>
          <label class="inline-flex items-center text-xl font-light">
            <input type="checkbox" class="w-6 h-6 rounded-xl mr-2"/>
            Done
          </label>
        </div>
      </div>
      <div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
        <div class="task-top flex justify-between mb-4 items-center">
          <h2 class="text-2xl font-bold">The sixth task title</h2>
          <div>
            <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
              <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text-xl mb-6">sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom flex justify-between">
          <div class="tags">
            <ul class="flex gap-2">
              <li><a href="#work"><div class="w-8 h-8 bg-violet-300 rounded-full mr-2"></div></a></li>
              <li><a href="#study"><div class="w-8 h-8 bg-blue-300 rounded-full mr-2"></div></a></li>
              <li><a href="#entertainment"><div class="w-8 h-8 bg-red-300 rounded-full mr-2"></div></a></li>
            </ul>
          </div>
          <label class="inline-flex items-center text-xl font-light">
            <input type="checkbox" class="w-6 h-6 rounded-xl mr-2"/>
            Done
          </label>
        </div>
      </div>
    </main>
  </div>
</div>
