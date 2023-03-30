import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  // calculating ramdom index to get prompt from surpriseMePrompts array

  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) {
    // call the same function again if the prompt is same as the previous one
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
