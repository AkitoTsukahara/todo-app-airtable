<div class="w-10/12 mx-auto my-10">
  <header class="flex text-4xl justify-between items-center mb-10">
    <h1 class="font-bold">todo</h1>
    <div id="add-item" class="text-6xl">+</div>
  </header>
  <div class="wrapper flex">
    <aside class="w-1/5 text-xl font-light">
      <ul id="tags">
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
          <input type="checkbox" class="w-6 h-6 rounded mr-2"/>
          Hide Done Task
        </label>
      </div>
    </aside>
    <main class="w-4/5">
      <div class="task">
        <div class="task-top">
          <h2>The first task title</h2>
          <div>
            <!-- 3点リーダーのメニューを付ける -->
          </div>
        </div>
        <p>sample message.sample message.sample message.sample message.sample message.sample message.sample message.</p>
        <div class="task-bottom">
          <div class="tags">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <label>
            <input type="checkbox"/>
            Done
          </label>
        </div>
      </div>
    </main>
  </div>
</div>
