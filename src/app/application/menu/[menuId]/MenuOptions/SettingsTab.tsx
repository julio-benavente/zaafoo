import {
  Button,
  FormControlLabelSwitch,
  RegularCloseButton,
  Switch,
} from "@/components";
import useFakeRequest from "@/helpers/fakeRequest";
import { ResetTvRounded } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import {
  FormProvider,
  useController,
  useForm,
  useFormContext,
} from "react-hook-form";

const SettingsTab = () => {
  const form = useForm({
    defaultValues: {
      isVisibleInMenu: true,
      isForAdults: false,
      withSpecificDatesAndTimes: false,
    },
  });

  const { field: settingOne } = useController({
    name: "isVisibleInMenu",
    control: form.control,
  });
  const { field: settingTwo } = useController({
    name: "isForAdults",
    control: form.control,
  });
  const { field: settingThree } = useController({
    name: "withSpecificDatesAndTimes",
    control: form.control,
  });

  return (
    <div>
      <FormProvider {...form}>
        <div className="grid grid-cols-1 gap-y-2 max-w-lg">
          <FormControlLabelSwitch
            label="It's visible in the menu"
            control={<Switch {...settingOne} />}
          />
          <FormControlLabelSwitch
            label="It's for adults only"
            control={<Switch {...settingTwo} />}
          />
          <FormControlLabelSwitch
            label="It's available at specific dates and times"
            control={<Switch {...settingThree} />}
          />
        </div>

        <Buttons />
      </FormProvider>
    </div>
  );
};

export default SettingsTab;

const Buttons = () => {
  const {
    getValues,
    formState: { isDirty },
    reset,
  } = useFormContext();
  const saveSettings = async () => {
    const response = await fakeRequest();
    const snackbarId = Math.random();

    if (response === "success") {
      enqueueSnackbar({
        color: "success",
        children: "The settings were updated.",
        id: snackbarId,
      });
      reset({
        ...getValues(),
      });
    } else {
      enqueueSnackbar({
        color: "error",
        children: "Oops! There was a problem. Try it again.",
        id: snackbarId,
      });
    }
    // closeAddVariantModal();
  };
  const cancel = () => {
    reset();
  };

  const [fakeResponse, fakeRequest] = useFakeRequest();
  const saveButtonIsDisabled = () => {
    if (!isDirty) {
      return true;
    }

    if (fakeResponse === "loading") {
      return true;
    }
  };
  const cancelButtonIsDisabled = () => {
    if (fakeResponse === "loading") {
      return true;
    }
  };

  return (
    <div className="grid grid-flow-col auto-cols-fr w-fit mt-8 gap-x-4 ml-auto">
      <Button
        variant="outlined"
        onClick={cancel}
        disabled={cancelButtonIsDisabled()}
      >
        Cancel
      </Button>
      <Button onClick={saveSettings} disabled={saveButtonIsDisabled()}>
        {fakeResponse === "loading" ? "Saving ..." : "Save"}
      </Button>
    </div>
  );
};
