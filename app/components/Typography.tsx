import React from "react"

type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>
export const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1 className={`font-bold text-4xl mb-8 ${className}`} {...rest}>
      {children}
    </h1>
  )
}

export const SubTitle = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1 className={`font-bold text-3xl mb-6 ${className}`} {...rest}>
      {children}
    </h1>
  )
}

type ParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>
export const Paragraph = ({ children, className, ...rest }: ParagraphProps) => {
  return <p className={`text-lg ${className}`}>{children}</p>
}
