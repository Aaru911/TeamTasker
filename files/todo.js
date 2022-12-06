    var list = document.querySelector('#list1'),
        form = document.querySelector('form'),
        item = document.querySelector('#item1');
    
    form.addEventListener('submit',
    
    function(e)
    {
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    }
    )
    
    list.addEventListener('click',
    function(e)
    {
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    }
    )
    
    function store() {
      var who=localStorage.getItem("who");
      localStorage.setItem(who+"_data",list.innerHTML);
    }
    
    function getValues() {
      var who=localStorage.getItem("who");
      var storedValues = localStorage.getItem(who+"_data");
      if(!storedValues) {
        list.innerHTML;
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();