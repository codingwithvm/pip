import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCandidate } from "../../../hooks/CandidateProvider";

type FormUpdateCandidateProps = {
  candidateId: string;
  firstName: string;
  lastName: string;
  candidateNumber: string;
  city: string;
  stateCode: string;
  candidateRole: string;
  proposals: string;
  profileImageUrl: string;
  onClose: () => void;
};

export function FormUpdateCandidate({
  candidateId,
  firstName,
  lastName,
  candidateNumber,
  city,
  stateCode,
  candidateRole,
  proposals,
  profileImageUrl,
  onClose,
}: FormUpdateCandidateProps) {
  const { updateCandidate, loadCandidates } = useCandidate();
  const [filePreview, setFilePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFilePreview(profileImageUrl);
    reset({
      firstName,
      lastName,
      candidateNumber,
      city,
      stateCode,
      candidateRole,
      proposals,
      profileImageUrl,
    });
  }, [profileImageUrl, firstName, lastName, candidateNumber, city, stateCode, candidateRole, proposals]);

  const schema = yup.object().shape({
    firstName: yup.string().required("Nome é obrigatório"),
    lastName: yup.string().required("Sobrenome é obrigatório"),
    candidateNumber: yup.string().required("Número da candidatura é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    stateCode: yup.string().required("UF é obrigatória"),
    candidateRole: yup.string().required("Ocupação é obrigatória"),
    proposals: yup.string().required("Propostas são obrigatórias"),
    profileImageUrl: yup.string().required("A foto é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("profileImageUrl", base64String); // Usa o setValue do react-hook-form para armazenar o Base64
        setFilePreview(base64String); // Atualiza a visualização da imagem
      };
      reader.readAsDataURL(file); // Converte o arquivo para Base64
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const newCandidate: Candidate = {
      firstName: data.firstName,
      lastName: data.lastName,
      number: data.candidateNumber,
      occupation: data.candidateRole,
      photo: data.profileImageUrl,
      state: data.city,
      uf: data.stateCode,
      voteIntention: 0,
    };

    setLoading(true);
    await updateCandidate(candidateId, newCandidate);
    setFilePreview("");
    setLoading(false);
    reset();
    onClose();
    loadCandidates()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-[Montserrat]">
      {/* Foto e upload */}
      <div className="flex items-center gap-[10px]">
        <div className="rounded-full border w-[80px] h-[80px] overflow-hidden">
          {filePreview ? (
            <img src={filePreview} alt="Foto carregada" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </div>

        <input type="file" id="file" className="hidden" accept="image/*" onChange={handleFileChange} />

        <label htmlFor="file" className="cursor-pointer bg-white border hover:bg-[#E1E1E1]/20 py-2 px-4 rounded-[20px]">
          Carregar Foto
        </label>

        <input type="hidden" {...register("profileImageUrl")} />
        {errors.profileImageUrl && <p className="text-red-500 text-[12px] font-semibold">{errors.profileImageUrl.message}</p>}
      </div>

      {/* Campos do formulário */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-[12px] pb-[10px]">NOME</label>
          <input
            type="text"
            className="border py-2 px-4 rounded-[10px] w-full"
            disabled={loading}
            {...register("firstName")}
          />
          {errors.firstName && <span className="text-red-500 text-[12px] font-semibold">{errors.firstName.message}</span>}
        </div>

        <div>
          <label className="block text-gray-700 text-[12px] pb-[10px]">SOBRENOME</label>
          <input
            type="text"
            className="border py-2 px-4 rounded-[10px] w-full"
            disabled={loading}
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-red-500 text-[12px] font-semibold">{errors.lastName.message}</span>
          )}
        </div>

        <div className="flex gap-[10px] w-full">
          <div>
            <label className="block text-gray-700 text-[12px] pb-[10px]">Nº DA CANDIDATURA</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-[140px]"
              disabled={loading}
              {...register("candidateNumber")}
            />
            {errors.candidateNumber && (
              <span className="text-red-500 text-[12px] font-semibold">{errors.candidateNumber.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-[12px] pb-[10px]">ESTADO</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-full"
              disabled={loading}
              {...register("city")}
            />
            {errors.city && <span className="text-red-500 text-[12px] font-semibold">{errors.city.message}</span>}
          </div>

          <div>
            <label className="block text-gray-700 text-[12px] pb-[10px]">UF</label>
            <input
              type="text"
              className="border py-2 px-4 rounded-[10px] w-full"
              disabled={loading}
              {...register("stateCode")}
            />
            {errors.stateCode && <span className="text-red-500 text-[12px] font-semibold">{errors.stateCode.message}</span>}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-[12px] pb-[10px]">OCUPAÇÃO</label>
          <input
            type="text"
            className="border py-2 px-4 rounded-[10px] w-full"
            disabled={loading}
            {...register("candidateRole")}
          />
          {errors.candidateRole && <span className="text-red-500 text-[12px] font-semibold">{errors.candidateRole.message}</span>}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 text-[12px] pb-[10px]">PROPOSTAS</label>
        <textarea
          className="border py-2 px-4 rounded-[10px] w-full"
          rows={4}
          disabled={loading}
          {...register("proposals")}
        />
        {errors.proposals && (
          <span className="text-red-500 text-[12px] font-semibold">{errors.proposals.message}</span>
        )}
      </div>

      {/* Botões */}
      <div className="flex justify-end gap-4 mt-4">
        <button type="button" className="bg-white py-2 px-4 border rounded-[20px] w-[150px]" onClick={onClose}>
          Cancelar
        </button>

        <button
          type="submit"
          className="bg-[#000] text-white py-2 px-4 rounded-[20px] w-[150px]"
          disabled={loading}
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}
