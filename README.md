<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Chysev/Kaalaman-ai/blob/main/LICENSE

<br />
<div align="center">
  <a href="">
    <h1>Kaalaman AI</h1>
  </a>
  <p align="center">
    An awesome A.I that you can use anytime with or without an internet!
    <br />
    <a>
      <strong>Get Started »</strong>
    </a>
    <br />
    <br />
    <a href="https://drive.google.com/file/d/1JV-KCbrs-HO8Fl2y80LCeaJ_oG88FQ6b/view?usp=sharing">
      View Demo
    </a>
    ·
    <a href="https://github.com/Chysev/Kaalaman-ai/issues">
      Report Bug
    </a>
    ·
    <a href="https://github.com/Chysev/Kaalaman-ai/issues">
      Request Feature
    </a>
  </p>
</div>

## About the Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

[product-screenshot]: public/image.png

Kaalaman AI is an open source web app that use GPT-Generated Unified Format (GGUF) such as:

- llama-2-7b-chat.Q8_0 [Download URL][Llama2_7B_Chat_DDLLINK]
- codellama-7b.Q8_0 [Download URL][CodeLlama_7B_Chat_DDLLINK]
- mistral-7b-openorca.Q4_0 [Download URL][MistralDDLLINK]
- orca-mini-3b-gguf2-q4_0 [Download URL][OrcaDDLLINK]

[Llama2_7B_Chat_DDLLINK]: https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/blob/main/llama-2-7b-chat.Q8_0.gguf
[CodeLlama_7B_Chat_DDLLINK]: https://huggingface.co/TheBloke/CodeLlama-7B-GGUF/blob/main/codellama-7b.Q8_0.gguf
[MistralDDLLINK]: https://gpt4all.io/models/gguf/mistral-7b-openorca.gguf2.Q4_0.gguf
[OrcaDDLLINK]: https://gpt4all.io/models/gguf/orca-mini-3b-gguf2-q4_0.gguf

## Getting Started

### Pre requisite:

Things you need to use and knowlegde you need to use this web app.

- GIT
- TYPESCRIPT & JAVASCRIPT
- PYTHON
- NODEJS & NPM
- NEXTJS
- REST API
- GGUF MODELS
- MODEL TRAINING (FINE-TUNING, PYTORCH)

<p align="right">(<a href="#readme-top">Back to top</a>)</p

### Installation

1. Download all of the Models, create "server/models" directory and put the Models inside the model directory
2. Clone the repo
   ```sh
   git clone https://github.com/Chysev/Kaalaman-ai
   ```
3. Install NPM packages - both server and client
   ```sh
   npm install or yarn
   ```
4. Define the API Model - /server/server.js

   ```sh
    // Models
    const Models = {
      llama2_7B_Chat: "llama-2-7b-chat.Q8_0.gguf",
      codellama_7B_Chat: "codellama-7b.Q8_0.gguf",
      mistral: "mistral-7b-openorca.gguf2.Q4_0.gguf",
      orca: "orca-mini-3b-gguf2-q4_0.gguf",
    };

    // Model Path and new Model define
    const model = new LlamaModel({
      modelPath: path.join(process.cwd(), "models", Models.llama2_7B_Chat),- Define here
    });
   ```

5. Start the Server
   ```sh
   cd server
   ```
   ```sh
   npm run server or yarn server
   ```
6. Start the Client
   ```sh
   npm run start or yarn start
   ```

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Contact

John Layda - [John Layda (Chysev)](https://facebook.com/Chysev) - Johnlayda92@gmail.com

Project Link: [Kaalaman-ai](https://github.com/Chysev/Kaalaman-ai)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
