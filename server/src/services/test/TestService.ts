import ITestServices from "./ITestService";

class TestServices implements ITestServices {
  getTestDataDefault = () => {
    return "Hello World";
  };

  getTestData = (value: string) => {
    return value;
  };
}

export default new TestServices();
