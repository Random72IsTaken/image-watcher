export default function (Alpine) {
    Alpine.directive(
        'image-watcher',
        (el, { expression }, { Alpine, evaluate }) => {
            let data = Alpine.reactive(evaluate(expression));

            if (el.nodeName.toLowerCase() !== 'img') {
                el = el.querySelector('img');

                if (el == null)
                    throw 'No image element was found where the watcher is applied; even within!';
            }

            el.addEventListener('load', () => {
                data.isLoaded = true;
            });

            data.isLoaded = el.complete && el.naturalHeight !== 0;
        }
    );
}
