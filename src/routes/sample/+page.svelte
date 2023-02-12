<script lang="ts">
  import '../../app.css';
</script>
<div class="w-10/12">
  <header>
    <h1 class="text-3xl font-bold ">todo</h1>
    <div id="add-item">+</div>
  </header>
  <div class="wrapper flex">
    <aside class="w-1/5">
      <ul id="tags">
        <li>work</li>
        <li>study</li>
        <li>entertainment</li>
        <li>family</li>
      </ul>
      <div id="hide-done-task">
        <label>
          <input type="checkbox"/>
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
