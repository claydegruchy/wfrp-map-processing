import { createWorker } from 'tesseract.js';

const worker = await createWorker({
    logger: m => console.log(m)
});

(async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data } = await worker.recognize('./sacvfdfhmjkk.png');
    console.log(Object.keys(data));
    await worker.terminate();
})();
