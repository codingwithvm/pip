import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormAddCandidate() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Nome é obrigatório"),
    lastName: yup.string().required("Sobrenome é obrigatório"),
    candidateNumber: yup.number().required("Número da candidatura é obrigatório"),
    city: yup.string().required("Estado é obrigatório"),
    stateCode: yup.string().required("UF é obrigatório"),
    candidateRole: yup.string().required("Ocupação é obrigatória"),
    proposals: yup.string().required("Propostas são obrigatórias"),
    profileImageUrl: yup.string().required("A foto é obrigatória")
  })

  const [filePreview, setFilePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Dados do formulário:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-[Montserrat]">
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
            {...register("firstName")}
          />
          {errors.firstName && <span className="text-red-500 text-[12px] font-semibold">{errors.firstName.message}</span>}
        </div>

        <div>
          <label className="block text-gray-700  text-[12px] pb-[10px]">SOBRENOME</label>
          <input
            type="text"
            className="border py-2 px-4 rounded-[10px] w-full"
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
              type="number"
              className="border py-2 px-4 rounded-[10px] w-[140px]"
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
              {...register("city")}
            />
            {errors.city && <span className="text-red-500 text-[12px] font-semibold">{errors.city.message}</span>}
          </div>

          <div>
            <label className="block text-gray-700  text-[12px] pb-[10px]">UF</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-full"
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
        <button
          type="submit"
          className="bg-[#000] text-white py-2 px-4 rounded-[20px] w-[150px]"
        >
          SALVAR
        </button>
      </div>
    </form>
  )
}