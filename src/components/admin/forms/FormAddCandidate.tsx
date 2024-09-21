import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCandidate } from "../../../hooks/CandidateProvider";
import { Toast } from "flowbite-react";
import { Link } from "react-router-dom";

export function FormAddCandidate() {
  const { saveCandidate } = useCandidate()
  const [lastCandidate, setLastCandidate] = useState<Candidate>({
    firstName: "",
    lastName: "",
    number: "",
    photo: "",
    occupation: "",
    state: "",
    uf: "",
    proposals: "",
    addedAt: new Date(""),
    views: 0
  })
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const schema = yup.object().shape({
    firstName: yup.string().required("Nome é obrigatório"),
    lastName: yup.string().required("Sobrenome é obrigatório"),
    candidateNumber: yup.string().required("Número da candidatura é obrigatório"),
    city: yup.string().required("Estado é obrigatório"),
    stateCode: yup.string().required("UF é obrigatório"),
    candidateRole: yup.string().required("Ocupação é obrigatória"),
    proposals: yup.string().required("Propostas são obrigatórias"),
    profileImageUrl: yup.string().required("A foto é obrigatória")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setValue("profileImageUrl", base64String) // Usa o setValue do react-hook-form para armazenar o Base64
        setFilePreview(base64String) // Atualiza a visualização da imagem
      }
      reader.readAsDataURL(file) // Converte o arquivo para Base64
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const newCandidate: Candidate = {
      firstName: data.firstName,
      lastName: data.lastName,
      number: data.candidateNumber,
      occupation: data.candidateRole,
      photo: data.profileImageUrl,
      state: data.city,
      uf: data.stateCode,
      proposals: data.proposals,
      voteIntention: 0,
      addedAt: new Date(),
      views: 0
    }

    setLoading(true)
    await saveCandidate(newCandidate)
    setLastCandidate(newCandidate)
    setShowToast(true)
    setFilePreview("")
    setLoading(false)
    reset()
  }

  return (
    <>
      {/* Toast de Sucesso */}
      {showToast && (
        <Toast>
          <div className="flex items-center">
            <div className="rounded-full border w-[80px] h-[80px] overflow-hidden">
              <img
                src={lastCandidate.photo}
                alt="Foto carregada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-[30px]">
              <h1 className="text-[10px]">Salvo com sucesso!</h1>
              <p>{lastCandidate.firstName.toUpperCase()}</p>
              <p className="font-bold">{lastCandidate.lastName.toUpperCase()}</p>
              <p className="font-bold text-blue-500">{lastCandidate.number.toUpperCase()}</p>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Link className="text-blue-500" to={'/admin/candidatos'}>
              VER DETALHES
            </Link>
            <Toast.Toggle />
          </div>
        </Toast >
      )
      }

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 font-[Montserrat]">
        {/* Foto e upload */}
        <div className="flex items-center gap-[10px]">
          <div className="rounded-full border w-[80px] h-[80px] overflow-hidden">
            {filePreview ? (
              <img
                src={filePreview}
                alt="Foto carregada"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200"></div>
            )}
          </div>

          <input
            type="file"
            id="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file"
            className="cursor-pointer bg-white border hover:bg-[#E1E1E1]/20 py-2 px-4 rounded-[20px]"
          >
            Carregar Foto
          </label>

          <input
            type="hidden"
            {...register("profileImageUrl")} // Campo invisível para base64
          />
          {errors.profileImageUrl && <p className="text-red-500 text-[12px] font-semibold">{errors.profileImageUrl.message}</p>}
        </div>

        {/* Campos do formulário */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700  text-[12px] pb-[10px]">NOME</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-full"
              disabled={loading ? true : false}
              {...register("firstName")}
            />
            {errors.firstName && <span className="text-red-500 text-[12px] font-semibold">{errors.firstName.message}</span>}
          </div>

          <div>
            <label className="block text-gray-700  text-[12px] pb-[10px]">SOBRENOME</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-full"
              disabled={loading ? true : false}
              {...register("lastName")}
            />
            {errors.lastName && (
              <span className="text-red-500 text-[12px] font-semibold">{errors.lastName.message}</span>
            )}
          </div>

          <div className="flex gap-[10px] w-full">
            <div>
              <label className="block text-gray-700  text-[12px] pb-[10px]">Nº DA CANDIDATURA</label>
              <input
                type="text"
                className="border py-2 px-4 rounded-[10px] w-[140px]"
                disabled={loading ? true : false}
                {...register("candidateNumber")}
              />
              {errors.candidateNumber && (
                <span className="text-red-500 text-[12px] font-semibold">{errors.candidateNumber.message}</span>
              )}
            </div>

            <div>
              <label className="block text-gray-700  text-[12px] pb-[10px]">ESTADO</label>
              <input
                type="text"
                className="border py-2 px-4 rounded-[10px] w-full"
                disabled={loading ? true : false}
                {...register("city")}
              />
              {errors.city && <span className="text-red-500 text-[12px] font-semibold">{errors.city.message}</span>}
            </div>

            <div>
              <label className="block text-gray-700  text-[12px] pb-[10px]">UF</label>
              <input
                type="text"
                className="border py-2 px-4 rounded-[10px] w-full"
                disabled={loading ? true : false}
                {...register("stateCode")}
              />
              {errors.stateCode && <span className="text-red-500 text-[12px] font-semibold">{errors.stateCode.message}</span>}
            </div>

          </div>
          <div>
            <label className="block text-gray-700  text-[12px] pb-[10px]">OCUPAÇÃO</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-full"
              disabled={loading ? true : false}
              {...register("candidateRole")}
            />
            {errors.candidateRole && <span className="text-red-500 text-[12px] font-semibold">{errors.candidateRole.message}</span>}
          </div>

        </div>

        <div>
          <label className="block text-gray-700  text-[12px] pb-[10px]">PROPOSTAS</label>
          <textarea
            className="border py-2 px-4 rounded-[10px] w-full"
            rows={4}
            disabled={loading ? true : false}
            {...register("proposals")}
          />
          {errors.proposals && (
            <span className="text-red-500 text-[12px] font-semibold">{errors.proposals.message}</span>
          )}
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className="bg-white py-2 px-4 border rounded-[20px] w-[150px]"
          >
            CANCELAR
          </button>
          {loading ? <button
            type="submit"
            className="bg-[#000]/10 cursor-wait text-white py-2 px-4 rounded-[20px] w-[150px]"
          >
            SALVANDO
          </button> : <button
            type="submit"
            className="bg-[#000] text-white py-2 px-4 rounded-[20px] w-[150px]"
          >
            SALVAR
          </button>}
        </div>
      </form>
    </>
  )
}
