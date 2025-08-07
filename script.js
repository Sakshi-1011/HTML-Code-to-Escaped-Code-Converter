
    function convertCode() {
      const input = document.getElementById('input').value;
      const escaped = input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
      document.getElementById('output').textContent = escaped;
    }
 