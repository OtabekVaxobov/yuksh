import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
export function Pop() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Telefon Raqamlar</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Direktor qabulxonasi</h4>
            <p className="text-sm text-muted-foreground">
              67-225-00-87
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Tezkor aloqa xizmati</h4>
            <p className="text-sm text-muted-foreground">
              67-225-11-43
            </p>
            </div>
            <div className="grid gap-4">
              <h4 className="font-medium leading-none"> Qabulxona </h4>
            <p className="text-sm text-muted-foreground">
             67-225-30-18
            </p>
            </div>
           
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}