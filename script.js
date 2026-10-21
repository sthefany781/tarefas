 const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');

        const totalTasksEl = document.getElementById('totalTasks');
        const completedTasksEl = document.getElementById('completedTasks');
        const pendingTasksEl = document.getElementById('pendingTasks');

        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

        function updateCounters() {
            const total = taskList.children.length;
            const completed = taskList.querySelectorAll('.completed').length;
            const pending = total - completed;

            totalTasksEl.textContent = total;
            completedTasksEl.textContent = completed;
            pendingTasksEl.textContent = pending;
        }

        function addTask() {
            const text = taskInput.value.trim();
            if (text === '') return;

            const li = document.createElement('li');
            li.className = 'task-item';
            
            li.innerHTML = `
                <span class="task-text">${text}</span>
                <button class="btn-delete">✕</button>
            `;

            li.querySelector('.task-text').addEventListener('click', function() {
                li.classList.toggle('completed');
                updateCounters();
            });

            li.querySelector('.btn-delete').addEventListener('click', function() {
                li.style.opacity = '0';
                li.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    li.remove();
                    updateCounters();
                }, 200);
            });

            taskList.appendChild(li);
            taskInput.value = '';
            updateCounters();
        }

        function init() {
            taskInput.value = "Finalizar as configurações iniciais do projeto";
            addTask();
            taskInput.value = "Revisar commits no GitHub";
            addTask();
            updateCounters();
        }

        init(); const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');

        const totalTasksEl = document.getElementById('totalTasks');
        const completedTasksEl = document.getElementById('completedTasks');
        const pendingTasksEl = document.getElementById('pendingTasks');

        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

        function updateCounters() {
            const total = taskList.children.length;
            const completed = taskList.querySelectorAll('.completed').length;
            const pending = total - completed;

            totalTasksEl.textContent = total;
            completedTasksEl.textContent = completed;
            pendingTasksEl.textContent = pending;
        }

        function addTask() {
            const text = taskInput.value.trim();
            if (text === '') return;

            const li = document.createElement('li');
            li.className = 'task-item';
            
            li.innerHTML = `
                <span class="task-text">${text}</span>
                <button class="btn-delete">✕</button>
            `;

            li.querySelector('.task-text').addEventListener('click', function() {
                li.classList.toggle('completed');
                updateCounters();
            });

            li.querySelector('.btn-delete').addEventListener('click', function() {
                li.style.opacity = '0';
                li.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    li.remove();
                    updateCounters();
                }, 200);
            });

            taskList.appendChild(li);
            taskInput.value = '';
            updateCounters();
        }

        function init() {
            taskInput.value = "Finalizar as configurações iniciais do projeto";
            addTask();
            taskInput.value = "Revisar commits no GitHub";
            addTask();
            updateCounters();
        }

        init(); const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');

        const totalTasksEl = document.getElementById('totalTasks');
        const completedTasksEl = document.getElementById('completedTasks');
        const pendingTasksEl = document.getElementById('pendingTasks');

        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

        function updateCounters() {
            const total = taskList.children.length;
            const completed = taskList.querySelectorAll('.completed').length;
            const pending = total - completed;

            totalTasksEl.textContent = total;
            completedTasksEl.textContent = completed;
            pendingTasksEl.textContent = pending;
        }

        function addTask() {
            const text = taskInput.value.trim();
            if (text === '') return;

            const li = document.createElement('li');
            li.className = 'task-item';
            
            li.innerHTML = `
                <span class="task-text">${text}</span>
                <button class="btn-delete">✕</button>
            `;

            li.querySelector('.task-text').addEventListener('click', function() {
                li.classList.toggle('completed');
                updateCounters();
            });

            li.querySelector('.btn-delete').addEventListener('click', function() {
                li.style.opacity = '0';
                li.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    li.remove();
                    updateCounters();
                }, 200);
            });

            taskList.appendChild(li);
            taskInput.value = '';
            updateCounters();
        }

        function init() {
            taskInput.value = "Finalizar as configurações iniciais do projeto";
            addTask();
            taskInput.value = "Revisar commits no GitHub";
            addTask();
            updateCounters();
        }

        init();
