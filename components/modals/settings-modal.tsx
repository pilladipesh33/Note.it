"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSetting } from "@/hooks/use-settings";
import { Label } from "../ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import { CONSTANT } from "@/utils/constant";

export const SettingModal = () => {
  const settings = useSetting();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how <span className="font-bold">{CONSTANT.TITLE}</span>{" "}
              looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
