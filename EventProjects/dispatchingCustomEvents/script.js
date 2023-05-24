document.addEventListener('DOMContentLoaded', function(){

    //Function to handle task completion
    function completeTask(event) {
        const task = event.target;
        task.classList.add('completed')
        
        //Dispatch Custom Event
            const taskCompletedEvent = new CustomEvent("taskCompleted", {detail: task.textContent});
            document.dispatchEvent(taskCompletedEvent);
    }

    //Attach event listener to each task
    const task = document.querySelectorAll("#taskList li");
    task.forEach(task => task.addEventListener("click", completeTask));

    //Function to handle the custom event
    function handleTaskCompleted(event) {
        const completedTask = event.detail;
        console.log('Task completed'+ completedTask );
    }

    //Attach event listener to the document for the custom event
    document.addEventListener("taskCompleted", handleTaskCompleted);

})