import Button from "../ui/button"
import Container from "../container"
import NavigationBar from "./navigation-bar"

const NavigationContainer = () => {
  return (
    <Container>
      <div className="hidden lg:flex h-[10rem] items-center justify-between w-full">
        <NavigationBar />
        <Button
          text="Recrutamento"
          customStyle="text-red-600 h-11 border-zinc-200"
        />
      </div>
    </Container>
  )
}

export default NavigationContainer
