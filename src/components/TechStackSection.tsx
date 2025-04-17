
import { Layers, Code, Bot, Cpu } from "lucide-react";

const TechStackSection = () => {
  return (
    <section id="technology" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our system integrates cutting-edge technologies to deliver seamless AI avatar experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Key AI Tools</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Emotion Detection Engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>TTS Acoustic Predictor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>TTS Viseme Generator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Text Voice Synthesizer</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">AI Model Details</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <p className="font-medium">TEXT GENERATION</p>
                    <p className="text-sm">AI Model: gemini-2.0-flash</p>
                    <p className="text-sm">Lightweight Gemini model via Google API</p>
                  </li>
                  <li>
                    <p className="font-medium">VIDEO LIP SYNC</p>
                    <p className="text-sm">AI Model: Google TTS</p>
                    <p className="text-sm">Uses Google Translate's TTS engine (online)</p>
                  </li>
                  <li>
                    <p className="font-medium">TEXT-TO-SPEECH (TTS)</p>
                    <p className="text-sm">JS model to animate lips</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Libraries & APIs</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Microsoft Cognitive Services Speech SDK</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Web Speech API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Google Gemini API</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Avatar Modeling</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Photoshop & Canva for Image Editing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Ezgif for Animation Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Viseme for Lip Synchronization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>PhotoscapeX for Detail Enhancement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
