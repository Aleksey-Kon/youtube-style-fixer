function removeElemts() {
  document.querySelectorAll('.ytSearchboxComponentInnerSearchIcon').forEach(el => {
    el.remove();
  });
  document.querySelectorAll('.ytSearchboxComponentYtdTextInputAssistantWrapper').forEach(el => {
    el.remove();
  });
  document.querySelectorAll('.ytp-fullscreen-grid-expand-button .ytp-button').forEach(el => {
    el.remove();
  });
}

function ytdMastheadActive(){
    const el = document.querySelector('.ytSearchboxComponentHost.ytSearchboxComponentDesktop');

    if (el) {
        // сразу добавляем класс
        el.classList.add('ytd-masthead');

        // наблюдатель за изменениями атрибутов
        const observer2 = new MutationObserver(mutations => {
            mutations.forEach(m => {
                if (m.type === 'attributes' && m.attributeName === 'class') {
                    if (!el.classList.contains('ytd-masthead')) {
                        el.classList.add('ytd-masthead');
                    }
                }
            });
        });

        observer2.observe(el, { attributes: true });
    }
}

removeElemts();
ytdMastheadActive();
const observer = new MutationObserver(removeElemts);
observer.observe(document.body, { childList: true, subtree: true });



