import { ArrowUpRight, Upload } from "lucide-react"
import { InputField } from "../../global/ui/input"
import InputTextarea from "../../global/ui/input/input-textarea"

const RecruitmentForm = () => {
  return (
    <div className="flex-[3] flex flex-col gap-6 items-start w-full">
      <div className="lg:flex gap-6 flex-col hidden">
        <h1 className="text-red-700 font-semibold text-3xl capitalize">
          Recrutamento via expresso
        </h1>
        <p className="text-black text-lg">
          A via expresso tem mais de 200 vagas nas mais diferentes áreas
          profissionais, preenche os campos abaixo às vagas disponíveis.
        </p>
      </div>

      <form className="space-y-4 h-full w-full">
        <InputField.Root>
          <InputField.Label label="Nome*" />
          <InputField.Input
            id="name"
            placeholder="Nome e sobrenome*"
            type="text"
          />
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Email*" />
          <InputField.Input
            id="email"
            type="email"
            placeholder="example@gmail.com*"
          />
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Telefone*" />
          <InputField.Input id="phone" placeholder="(+244)" type="number" />
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Data de nascimento*" />
          <InputField.Input id="date of birth" type="date" />
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Gênero*" />
          <div className="flex gap-2">
            <div className="flex items-center gap-3">
              <InputField.Input
                type="radio"
                name="gender"
                id="date of birth"
                customStyle="size-4"
              />
              <InputField.Label customStyle="font-normal" label="M" />
            </div>
            <div className="flex items-center gap-3">
              <InputField.Input
                type="radio"
                name="gender"
                id="date of birth"
                customStyle="size-4"
              />
              <InputField.Label customStyle="font-normal" label="F" />
            </div>
          </div>
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Habilitações literárias*" />
          <InputField.Input placeholder="Ensino médio concluído" />
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Situação profissional*" />
          <div className="flex gap-2">
            <div className="flex items-center gap-3">
              <InputField.Input
                name="job"
                type="radio"
                id="has_a_job"
                customStyle="size-4"
              />
              <InputField.Label customStyle="font-normal" label="Empregado" />
            </div>
            <div className="flex items-center gap-3">
              <InputField.Input
                name="job"
                id="no_job"
                type="radio"
                customStyle="size-4"
              />
              <InputField.Label
                customStyle="font-normal"
                label="Desempregado"
              />
            </div>
          </div>
        </InputField.Root>

        <InputField.Root>
          <InputField.Label label="Aplicação de motivação*" />
          <InputTextarea
            placeholder="Deixe a sua mensagem aqui..."
            customStyle="h-[30vh] p-4 border rounded-lg w-full resize-none"
          />
        </InputField.Root>

        <InputField.Root customStyle="flex items-center flex-col gap-8 lg:gap-2 w-full justify-between">
          <div className="flex flex-col lg:gap-0 gap-4 lg:flex-row justify-between w-full">
            <InputField.Label
              customStyle="text-xl lg:text-base"
              label="Carregar currículum vitae(CV)*"
            />
            <InputField.Button
              icon={Upload}
              type="submit"
              text="Upload (.pdf, .jpg, .png)"
              customStyle="text-red-700 bg-white border border-red-700 h-14 lg:h-10"
            />
          </div>

          <div className="flex w-full flex-col lg:gap-0 gap-4 lg:flex-row justify-between">
            <InputField.Label
              label="Carregar fotografia tipo passe*"
              customStyle="text-xl lg:text-base"
            />
            <InputField.Button
              icon={Upload}
              type="submit"
              text="Upload (jpg ou png)"
              customStyle="text-red-700 bg-white border border-red-700 h-14 lg:h-10"
            />
          </div>

          <InputField.Button
            text="Submeter candidatura"
            icon={ArrowUpRight}
            customStyle="self-start lg:self-end text-white h-14 lg:h-10"
          />
        </InputField.Root>
      </form>
    </div>
  )
}

export default RecruitmentForm
