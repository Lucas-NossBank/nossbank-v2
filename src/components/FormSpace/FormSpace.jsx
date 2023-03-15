import { useForm } from "react-hook-form"
import { DataSpaceInput, DataSpaceTextAreaInput, Divisor, FormSection, FormStructure } from "./styles"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import OpenAccount from "../Home_components/OpenAccountSpace/OpenAccountSpace"

const FormSpace = () =>  {

    const { SubmitFunction } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    contato: yup.string().required("Telefone obrigatório"),
    cnpj: yup.string().required("CNPJ obrigatório"),
    mensagem: yup.string().required("Mensagem obrigatória"),
  });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    return (
        <>
            <Divisor>     
            <OpenAccount/>
                <FormSection>
                    <h1>Solicite já sua máquina de cartão</h1>

                    <FormStructure onSubmit={handleSubmit(SubmitFunction)}>

                        {/* ----- ~> Skip Line <~ ----- */}

                        <DataSpaceInput>
                            
                        <label>Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite aqui seu nome"
                            {...register("name")}
                        />
                        <p>{errors.name?.message}</p>
                        </DataSpaceInput>

                        {/* ----- ~> Skip Line <~ ----- */}

                        <DataSpaceInput>
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite aqui seu email"
                            {...register("email")}
                        />
                        .<p>{errors.email?.message}</p>
                        </DataSpaceInput>

                        {/* ----- ~> Skip Line <~ ----- */}

                        <DataSpaceInput>
                        <label>Contato</label>
                        <input
                            type="tel"
                            id="cellphone"
                            placeholder="99-99999-9999"
                            pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                            {...register("contato")}
                        />
                        <p>{errors.contato?.message}</p>
                        </DataSpaceInput>

                        {/* ----- ~> Skip Line <~ ----- */}

                        <DataSpaceInput>
                        <label>CNPJ</label>
                        <input
                            type="text"
                            id="cnpj"
                            placeholder="Digite aqui seu CNPJ"
                            pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                            {...register("cnpj")}
                        />
                        <p>{errors.cnpj?.message}</p>
                        </DataSpaceInput>

                        {/* ----- ~> Skip Line <~ ----- */}

                        <DataSpaceTextAreaInput>
                        <label>Mensagem</label>
                        {/* <input
                            type="text"
                            id="describe"
                            placeholder="Digite aqui uma breve descrição"
                            {...register("bio")}
                        /> */}
                        <textarea
                            maxLength={255}
                            name="mensagem"
                            {...register("mensagem")}>

                        </textarea>
                        <p>{errors.mensagem?.message}</p>
                        </DataSpaceTextAreaInput>

                        {/* ----- ~> Skip Line <~ ----- */}

                        <button type="submit">Cadastrar</button>
                    </FormStructure>
                </FormSection>
            </Divisor>
        </>
    )

}

export default FormSpace