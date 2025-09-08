"use client";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { 
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";


Amplify.configure(outputs);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

export default function App() {
  return (
    <div className="p4">
      <h1>Storage Browser</h1>
      <div className="mt-4">
        <StorageBrowser/>
      </div>
    </div>
  );
}

