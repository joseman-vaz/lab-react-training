export function Greetings(props) {
  const getGreetingText = () => {
    switch (props.lang) {
      case 'de':
        return `Hallo ${props.children}!`;
      case 'en':
        return `Hello ${props.children}!`;
      case 'es':
        return `¡Hola ${props.children}!`;
      case 'fr':
        return `Bonjour ${props.children}!`;
      default:
        return `Hello ${props.children}!`;
    }
  };
  return <div>{getGreetingText()}</div>;
}
