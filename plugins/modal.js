function _createModal(options) {
  const DEFAULT_WIDTH = '600px';
  const modal = document.createElement('div');
  modal.classList.add('vmodal');
  modal.insertAdjacentHTML('afterbegin', `
		<div class="modal-overlay">
			<div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
				<div class="modal-header">
					<span class="modal-title">${options.title || 'Window'}</span>
					${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
				</div>
				<div class="modal-body">
					${options.content || ' '}
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary">Ok</button>
					<button class="btn btn-secondary" data-close="true">Cancel</button>
				</div>
			</div>
		</div>
  `);
  document.body.appendChild(modal);
  return modal;
}

/*
* - Object options {} -
* title: string ✅
* closable: boolean (if true show the close buton) ✅
* content: string ✅
* width: string ('400px') ✅
* destroy(): void 
* ------
* click on close - close
* click on grey area - close
** setContent(string(html)): void | PUBLIC (modal window content)
* onClose(): void
* onOpen(): void
* beforeClose(): boolen
** animate.css library you can animate it  
*/

$.modal = function(options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;
  let destroyed = false;

  const modal = {
    open() {
      if(destroyed) {
        return console.log('Modal is destroyed.');
      }
      !closing && $modal.classList.add('open');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_SPEED);
    },
  }

  $modal.addEventListener('click', event => {
    console.log('clicked', event.target.dataset.close);
    if (event.target.dataset.close) {
      modal.close();
    }
  })


  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal);
      destroyed = true;
    }
  })
}

