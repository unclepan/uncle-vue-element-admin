export function downloadFileForm(url, data = {}, method = 'post') {
  const form = document.createElement('form');
  form.style.display = 'none';
  document.body.appendChild(form);
  form.target = '_blank';
  form.action = url;
  form.method = method;
  form.enctype = 'application/x-www-form-urlencoded';
  form.innerHTML = '';
  Object.keys(data).forEach((key) => {
    const input = document.createElement('input');
    input.name = key;
    input.value = data[key];
    form.appendChild(input);
  });
  form.submit();
}

export function downloadFileBlob(data, name, type = 'application/vnd.ms-excel;charset=utf-8') {
  const blob = new Blob([data], { type });
  const url = window.URL || window.webkitURL || window.moxURL;
  const downloadHref = url.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = downloadHref;
  downloadLink.download = name;
  downloadLink.click();
}
