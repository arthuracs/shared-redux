import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Checkbox,
  CircleCheckIcon,
  Flex,
  fontFamily,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
  ThemeProvider,
  TimeMachineIcon,
  typography,
} from "@lokalise/louis";
import "./App.css";
import { UserResponseList } from "./components/UserResponseList";
import { customThemes } from "./themes/customThemes";
import { Counter } from "./components/counter/Counter";

const Heading1 = styled.h1`
  font-family: ${fontFamily("default")};
  ${typography("heading1")};
`;

const tShirtSizes = [
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tShirtSize, setTShirtSize] = useState<null | typeof tShirtSizes[0]>(
    null
  );
  const [fruit, setFruit] = useState("");
  const [ready, setReady] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setTShirtSize(null);
    setFruit("");
    setReady(false);
  };

  return (
    <ThemeProvider activeTheme="base" themes={customThemes}>
      <main>
        <Counter />
        <Heading1>Louis example form</Heading1>

        {submitted && tShirtSize && (
          <UserResponseList
            userDetails={{
              name,
              email,
              phone,
              tshirtSize: tShirtSize,
              fruit,
            }}
            onReset={handleReset}
          />
        )}

        {!submitted && (
          <form
            className="form"
            onSubmit={() => setSubmitted(true)}
            onReset={handleReset}
          >
            <Flex direction="column" gap={4}>
              <Label text="Full name" underline>
                <Input
                  name="fullNameTest"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Label>
              <Label text="E-mail" underline>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  placeholder="someone@example.com"
                />
              </Label>
              <Label text="Phone" underline>
                <Input
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                />
              </Label>
              <Label text="T-Shirt Size" underline>
                <Select
                  name="tShirtSize"
                  options={tShirtSizes}
                  value={tShirtSize}
                  onChange={(option, actionMeta) => {
                    if (actionMeta.action === "clear") {
                      setTShirtSize(null);
                    } else if (option) {
                      setTShirtSize(option);
                    }
                  }}
                  isClearable
                  placeholder="Select your T-shirt size..."
                />
              </Label>
              <Label text="Preferred fruit" underline />
              <RadioGroup
                name="fruit"
                onChange={(e) => setFruit(e.currentTarget.value)}
                value={fruit}
              >
                <Radio value="apple">🍎 Apple</Radio>
                <Radio value="orange">🍊 Orange</Radio>
                <Radio value="pear">🍐 Pear</Radio>
                <Radio value="lemon">🍋 Lemon</Radio>
                <Radio value="mango">🥭 Mango</Radio>
              </RadioGroup>
              <Label text="Checks" underline>
                <Checkbox
                  name="testSubmit"
                  checked={ready}
                  onChange={(e) => setReady(e.currentTarget.checked)}
                >
                  Ready to submit
                </Checkbox>
              </Label>
              <Flex direction="row" gap={2}>
                <Button
                  appearance="primary"
                  leftIcon={<CircleCheckIcon />}
                  type="submit"
                  disabled={
                    name === "" ||
                    email === "" ||
                    phone === "" ||
                    tShirtSize === undefined ||
                    fruit === "" ||
                    !ready
                  }
                >
                  Submit form
                </Button>
                <Button
                  appearance="danger"
                  variant="outline"
                  leftIcon={<TimeMachineIcon />}
                  type="reset"
                  disabled={
                    name === "" &&
                    email === "" &&
                    phone === "" &&
                    tShirtSize === undefined &&
                    fruit === "" &&
                    !ready
                  }
                >
                  Reset
                </Button>
              </Flex>
            </Flex>
          </form>
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
