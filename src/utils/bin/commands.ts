// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `welcome! here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'opening latest resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `opening mailto:${config.email}...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
                    █████               ████   ███           
                   ░░███               ░░███  ░░░            
  ██████  ████████  ░███████    ██████  ░███  ████   ██████  
 ███░░███░░███░░███ ░███░░███  ███░░███ ░███ ░░███  ░░░░░███ 
░███ ░███ ░███ ░███ ░███ ░███ ░███████  ░███  ░███   ███████ 
░███ ░███ ░███ ░███ ░███ ░███ ░███░░░   ░███  ░███  ███░░███ 
░░██████  ░███████  ████ █████░░██████  █████ █████░░████████
 ░░░░░░   ░███░░░  ░░░░ ░░░░░  ░░░░░░  ░░░░░ ░░░░░  ░░░░░░░░ 
          ░███                                               
          █████                                              
         ░░░░░                                               


hi! i'm ophelia.

☕ hobbies: mathematics, programming, philosophy & anime
🌱 currently learning: probability/stochastic processes
📫 ophelia.rivera@stanford.edu

feel free to reach out if you're interested in working together.

type 'help' to see the list of available commands. 
type 'resume' for my latest resume.
`;
};
