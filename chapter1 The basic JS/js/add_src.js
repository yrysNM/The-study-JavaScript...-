function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.head.appendChild(script);
  }
  addScript('../js/1.js'); // загружаться эти скрипты начнут сразу
  addScript('../js/2.js');
